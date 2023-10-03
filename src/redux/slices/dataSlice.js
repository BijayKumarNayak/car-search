import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    inputData: "",
  },
  reducers: {
    setInputData: (state, action) => {
      state.inputData = action.payload;
    },
  },
});

export const { setInputData } = dataSlice.actions;
export default dataSlice.reducer;