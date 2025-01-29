import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITaskForm } from "../../interface/inferface";
import {
  batchDeleteTaskService,
  batchTaskCompleteService,
  createTaskService,
  filterTaskService,
  getTaskService,
} from "./taskService";

export const createTask = createAsyncThunk<unknown, ITaskForm>(
  "user/createTask",
  async (formInput, { rejectWithValue }) => {
    try {
      const response = await createTaskService(formInput);
      console.log("response in action", response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getTasks = createAsyncThunk<unknown, void>(
  "user/getTasks",
  async (uid, { rejectWithValue }) => {
    try {
      const response = await getTaskService(uid);
      console.log(response)
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const filterTasks = createAsyncThunk(
  "user/filterTasks",
  async (filter) => {
    try {
      const response = await filterTaskService(filter);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const batchDeleteTask = createAsyncThunk(
  "user/batchdelete",
  async (filter, { rejectWithValue }) => {
    try {
      const response = await batchDeleteTaskService(filter);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const batchTaskComplete = createAsyncThunk(
  "user/batchComplete",
  async (filter, { rejectWithValue }) => {
    try {
      const response = await batchTaskCompleteService(filter);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
