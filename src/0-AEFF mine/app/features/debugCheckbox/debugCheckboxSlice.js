import { createSlice } from '@reduxjs/toolkit';

export const debugCheckboxSlice = createSlice({
  name: "debugCheckbox",
  initialState: { value: false },
  reducers: {
    debugCheckBox: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { debugCheckBox } = debugCheckboxSlice.actions;
export default debugCheckboxSlice.reducer;
