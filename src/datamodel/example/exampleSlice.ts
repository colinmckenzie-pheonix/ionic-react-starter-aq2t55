import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface KeyValuePair {
  key: number;
  value: string;
}

interface ExampleState {
  trueFalse: boolean;
  counter: number;
  name: string;
  nameInput: string;
  selectedPensionProviderId: number;
  pensionProviders: KeyValuePair[];
  items: KeyValuePair[];
  selectedCheckboxId: undefined | number;
}

const initialState: ExampleState = {
  trueFalse: undefined,
  counter: 0,
  name: '',
  nameInput: '',
  selectedPensionProviderId: undefined,
  pensionProviders: [
    { key: 1, value: 'Brown Pensions' },
    { key: 2, value: 'Yellow Money Managers' },
    { key: 3, value: 'Black Investment Trust' },
    { key: 4, value: 'Red Life' },
  ],
  items: [
    { key: 1, value: 'apple' },
    { key: 2, value: 'banana' },
    { key: 3, value: 'mango' },
  ],
  selectedCheckboxId: undefined,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setTrueFalse: (state, action: PayloadAction<boolean>) => {
      state.trueFalse = action.payload;
    },
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCounter: (state) => {
      state.counter = state.counter - 1;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setNameInput: (state, action: PayloadAction<string>) => {
      state.nameInput = action.payload;
    },
    setSelectedPensionProviderId: (state, action: PayloadAction<number>) => {
      state.selectedPensionProviderId = action.payload;
    },
    selectId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
    toggleCheckboxGroup: (state, action: PayloadAction<number>) => {
      console.log(
        'toggleCheckboxGroup, state.selectedCheckboxId: ',
        state.selectedCheckboxId,
        ', payload: ',
        action.payload
      );
      const isChecked = state.selectedCheckboxId === action.payload;
      if (isChecked) {
        state.selectedCheckboxId = undefined; // uncheck
      } else {
        state.selectedCheckboxId = action.payload; // check
      }
    },
    // can add other actions like remove, rename, etc.
  },
});

export const {
  setTrueFalse,
  incrementCounter,
  decrementCounter,
  setCounter,
  setName,
  setNameInput,
  setSelectedPensionProviderId,
  selectId,
  toggleCheckboxGroup,
} = exampleSlice.actions;

export default exampleSlice.reducer;

// Export a reusable selector here
export const selectPensionProviders = (state: RootState) =>
  state.example.pensionProviders;
export const selectSelectedPensionProviderId = (state: RootState) =>
  state.example.selectedPensionProviderId;
export const selectCounter = (state: RootState) => state.example.counter;

export const selectCombinedIds = createSelector(
  selectSelectedPensionProviderId,
  selectCounter,
  (a: number, b: number) => {
    return (a ?? 0) + (b ?? 0);
  }
);

export const getSelectedPensionProvider = createSelector(
  selectPensionProviders,
  selectSelectedPensionProviderId,
  (providers: KeyValuePair[], selectedId: number) => {
    if (providers && selectedId) {
      return providers.find((provider) => provider.key === selectedId);
    }
    return undefined;
  }
);

// export const selectProviderForKey = (state: RootState, key: number) =>
//   state.example.pensionProviders.filter((provider) => provider.key === key);
