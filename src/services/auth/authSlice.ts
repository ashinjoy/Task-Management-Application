import { createSlice } from "@reduxjs/toolkit";
import { IUserSlice } from "../../interface/inferface";
import { googleSignIn } from "./authActions";

const userData = localStorage.getItem("userData");

const initialState: IUserSlice = {
  userData: JSON.parse(userData!) || {
    name: "",
    email: "",
    phoneNumber: null,
    profileImg: "",
    uid: "",
  },
  success: false,
  error: "",
  loading: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetDefault:(state)=>{
      state.error = ""
      state.loading  = false
      state.message = ""
      state.success = false
    },
    resetMessage:(state)=>{
      state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        localStorage.setItem("userData", JSON.stringify(action.payload));
        state.userData = action.payload;
        state.success = true;
        state.message = "You are successfully logged in";
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        
        state.error = "err occured";
      });
  },
});
export const {resetMessage,resetDefault}  = userSlice.actions
export default userSlice.reducer;
