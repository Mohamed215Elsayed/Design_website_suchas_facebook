// import { createSlice } from "@reduxjs/toolkit";
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     name: "M",
//     email: "M@email.com",
//     password: "123456",
//   },
//   reducers: {
//     update: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.password = action.payload.password;
//     },
//     // remove: (state) => {state = null;},
//     remove: (state) => (state = {}),
//     addHelloToName : (state, action) =>{
//       state.name = `Hello ` + action.payload.name
//     }
//   },
// });
// export const { update, remove, addHelloToName } = userSlice.actions;
// export default userSlice.reducer;
/*****************2********* */
// import { createSlice } from "@reduxjs/toolkit";
// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//         name: "M",
//         email: "M@email.com",
//         password: "123456",
//     },
//     pending: false,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateFailure: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });
// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;
// export default userSlice.reducer;
/***********3****** */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const response = await axios.post(
    "http://localhost:8000/api/users/1/update",
    user
  );
  return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
      userInfo: {
        name: "Ahmed",
        email: "Ahmed@email.com",
        // password: "123456",
      },
      pending: null,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateUser2.pending, (state) => {
          state.pending = true;
          state.error = false;
        })
        .addCase(updateUser2.fulfilled, (state, action) => {
          state.userInfo = action.payload;
          state.pending = false;
        })
        .addCase(updateUser2.rejected, (state) => {
          state.pending = false;
          state.error = true;
        });
    },
  });

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;


