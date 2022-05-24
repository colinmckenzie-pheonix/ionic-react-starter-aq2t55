import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LauncherState {
  afterPensionsADay: boolean;
  numPensions: number;
}

const initialState: LauncherState = {
  afterPensionsADay: undefined,
  numPensions: undefined,
};

const launcherSlice = createSlice({
  name: 'launcher',
  initialState,
  reducers: {
    setAfterPensionsADay: (state, action: PayloadAction<boolean>) => {
      state.afterPensionsADay = action.payload;
    },
    setNumPensions: (state, action: PayloadAction<number>) => {
      state.numPensions = action.payload;
    },
  },
});

export const { setAfterPensionsADay, setNumPensions } = launcherSlice.actions;

export default launcherSlice.reducer;
