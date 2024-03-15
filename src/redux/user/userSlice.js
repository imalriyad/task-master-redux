import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Al Riyad",
    email: "imalriyad@gmail.com",
    number: "+8801314213978",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
