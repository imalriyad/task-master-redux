import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../tasks/taskSlice";
import userSlice from "../user/userSlice";
import baseApi from "../api/baseApi";


const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
