import { createAsyncThunk } from "@reduxjs/toolkit";
import { googleSignInService } from "./authService";
import { IAuthGoogleData } from "../../interface/inferface";

export const googleSignIn = createAsyncThunk<IAuthGoogleData,void>(
  "user/googleSignIn",
  async (_, { rejectWithValue }) => {
    try {
      const response = await googleSignInService();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
