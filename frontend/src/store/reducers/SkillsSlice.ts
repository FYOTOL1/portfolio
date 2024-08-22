import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TSkillType } from "src/types/SkillTypes";

const API_BASE_URL = "http://localhost:3009";

type TInitialState = {
  data: TSkillType[] | null;
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

export const getAllSkills = createAsyncThunk<TSkillType[]>(
  "SkillsSlice/getAllSkills",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/skills`);

      const skills: TSkillType[] = await res.json();
      return skills;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const postSkill = createAsyncThunk<TSkillType[]>(
  "SkillsSlice/postSkill",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/skills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch skills");
      }

      const skills: TSkillType[] = await res.json();
      return skills;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteSkill = createAsyncThunk(
  "SkillsSlice/deleteSkill",
  async (skillId: string | undefined, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/skills/${skillId}`, {
        method: "DELETE",
      });

      const skills = await res.json();

      dispatch(getAllSkills());
      return skills;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const SkillsSlice = createSlice({
  name: "SkillsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getAllSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSkills.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(getAllSkills.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Post
      .addCase(postSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(postSkill.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(postSkill.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Delete
      .addCase(deleteSkill.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSkill.fulfilled, (state) => {
        state.status = "SUCCESS";
        state.loading = false;
      })
      .addCase(deleteSkill.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      });
  },
});

export default SkillsSlice.reducer;
