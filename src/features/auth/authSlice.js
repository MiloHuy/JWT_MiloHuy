import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    pwd: null,
    token: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      console.log("Action payload: " + Object.keys(action.payload));
      const { username, data, password } = action.payload;
      console.log("User: " + username);
      state.username = username;
      state.pwd = password;
      state.token = data.data.token;
    },
    logOut: (state, action) => {
      state.username = null;
      state.pwd = null;
      state.token = null;
      localStorage.removeItem("persist:root");
      localStorage.clear();
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
