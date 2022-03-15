import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserInfo, APILogIn } from "./userTypes";

/* ------------- Initial State ------------- */
export const initialState: UserState = {
  fetching: false,
  error: "",
  user: {
    firstName: "",
    lastName: "",
  },
};

/* ------------- Slice ------------- */

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInRequest: (state, { payload }: PayloadAction<APILogIn>) => {
      state.fetching = true
    },
    loginSuccess: (state, { payload }: PayloadAction<UserInfo>) => {
      state.fetching = false
      state.user = payload
    },
    loginFailure: (state, { payload }: PayloadAction<string> ) => {
      state.fetching = false
      state.error = payload
    }
  },
});

export const {
  logInRequest,
  loginSuccess,
  loginFailure,
} = userSlice.actions;

export const { reducer } = userSlice;
