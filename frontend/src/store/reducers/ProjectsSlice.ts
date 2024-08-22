import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TProjectCard } from "src/types/ProjectCardTypes";

const API_BASE_URL = "http://localhost:3009";

type TInitialState = {
  data: TProjectCard[] | null;
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

export const getAllProjects = createAsyncThunk<TProjectCard[]>(
  "ProjectSlice/getAllProjects",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/projects`);
      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }
      const projects: TProjectCard[] = await res.json();
      return projects;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const postProject = createAsyncThunk(
  "ProjectSlice/postProject",
  async (data: TProjectCard, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch projects");
      }

      const projects: TProjectCard[] = await res.json();
      return projects;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "ProjectSlice/deleteProject",
  async (projectId: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const res = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: "DELETE",
      });

      const projects = await res.json();
      return projects;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get
      .addCase(getAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProjects.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(getAllProjects.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Post
      .addCase(postProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(postProject.fulfilled, (state, { payload }) => {
        state.status = "SUCCESS";
        state.data = payload;
        state.loading = false;
      })
      .addCase(postProject.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      })

      //Delete
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProject.fulfilled, (state) => {
        state.status = "SUCCESS";
        state.loading = false;
      })
      .addCase(deleteProject.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = "FAILED";
        state.loading = false;
      });
  },
});

export default ProjectSlice.reducer;
