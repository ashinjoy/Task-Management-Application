import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../services/auth/authSlice";
import taskReducer from '../services/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    task:taskReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
