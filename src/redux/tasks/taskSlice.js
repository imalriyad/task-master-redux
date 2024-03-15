import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [],
  userSpacificTask: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },

    updateStatus: (state, { payload }) => {
      const targetTask = state.task.find((item) => item.id === payload.id);
      targetTask.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpacificTask = state.task.filter(
        (item) => item.assginTo === payload
      );
    },
  },
});
export const { addTask, removeTask, updateStatus, userTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
