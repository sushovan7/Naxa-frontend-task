import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../features/projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
export default store;
