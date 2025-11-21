import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TMessage } from "src/types/MessagesTypes";

const API_BASE_URL =
  import.meta.env.VITE_MOD === "DEV"
    ? import.meta.env.VITE_DEV_API_BASE_URI
    : import.meta.env.VITE_PUBLISH_API_BASE_URI;

type TInitialState = {
  data: TMessage[] | null;
  error: string | null;
  status: "SUCCESS" | "FAILED" | null;
  loading: boolean;
};
const initialState: TInitialState = {
  data: null,
  error: null,
  status: null,
  loading: false,
};

export const getAllMessages = createAsyncThunk<TMessage[]>(
  "MessagesSlice/getAllMessages",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/messages`);

      const messages: TMessage[] = await res.json();
      return messages;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const postMessage = createAsyncThunk(
  "MessagesSlice/postMessage",
  async (data: TMessage, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }

      const messages: TMessage[] = await res.json();
      return messages;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteMessages = createAsyncThunk(
  "MessagesSlice/deleteMessage",
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/messages`, {
        method: "DELETE",
      });

      const messages = await res.json();
      dispatch(getAllMessages());
      return messages;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const MessagesSlice = createSlice({
  name: "MessagesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getAllMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMessages.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(getAllMessages.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Post
      .addCase(postMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(postMessage.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(postMessage.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Delete
      .addCase(deleteMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMessages.fulfilled, (state) => {
        state.status = "SUCCESS";
        state.loading = false;
      })
      .addCase(deleteMessages.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      });
  },
});

export default MessagesSlice.reducer;
