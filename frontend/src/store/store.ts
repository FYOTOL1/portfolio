import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./reducers/ProjectsSlice";
import SkillsSlice from "./reducers/SkillsSlice";
import MessagesSlice from "./reducers/MessagesSlice";

const store = configureStore({
  reducer: {
    ProjectSlice,
    SkillsSlice,
    MessagesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
