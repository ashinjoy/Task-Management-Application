import { createSlice } from "@reduxjs/toolkit";
import { batchDeleteTask, batchTaskComplete, createTask, filterTasks, getTasks } from "./taskActions";
import { ITaskSlice } from "../../interface/inferface";
import { batchDeleteTaskService } from "./taskService";

const initialState: ITaskSlice = {
  loading: false,
  success: false,
  error: "",
  message: "",
  tasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    resetMessage:(state)=>{
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        console.log('entry inside');
        state.tasks = [...state.tasks,action.payload];
        state.success = true;
        state.message = "Task Created SuccessFully";
      })
      .addCase(createTask.rejected, (state) => {
        state.error = "error";
      })
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.success = true;
        state.message = "Read Complete";
      })
      .addCase(getTasks.rejected, (state) => {
        state.error = "Error Occured";
      })
      .addCase(filterTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(filterTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.success = true;

      })
      .addCase(filterTasks.rejected, (state) => {
        state.error = "error occured";
      })
      .addCase(batchDeleteTask.pending,(state)=>{
        state.loading = true
      })
      .addCase(batchDeleteTask.fulfilled,(state,action)=>{
        state.success = action.payload
        state.message = "Selected Tasks Deleted"
      })
      .addCase(batchDeleteTask.rejected,(state)=>{
        state.error = "error"
      })
      .addCase(batchTaskComplete.pending,(state)=>{
        state.loading =  true
      })
      .addCase(batchTaskComplete.fulfilled,(state,action)=>{
        state.success = action.payload
        state.message = "Selected Tasks Completed"
      })
      .addCase(batchTaskComplete.rejected,(state)=>{
        state.error = "error in deletion"
      })
  },
});

export const {resetMessage} = taskSlice.actions

export default taskSlice.reducer;
