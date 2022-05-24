import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IPensionProvider {
  id: number;
  name: string;
  isCheckBenefits?: boolean;
  isCheckFees?: boolean;
}

export interface IInhousePension {
  planNumber: string;
  planName: string;
  value: string;
  charges: string;
  recievingPayments: boolean;
  adviserAttached: boolean;
}

export interface IIncomingPension {
  id: number;
  provider: IPensionProvider;
  unlistedProviderName?: string;
  planNumber?: string;
  estimatedValue?: number;
  employerPayingIn?: boolean;
  moneyTakenOut?: boolean;
  onHold?: boolean;
  isAdded?: boolean;
}

export const PENSION_PROVIDERS: IPensionProvider[] = [
  { name: 'Select provider name...', isCheckBenefits: true, isCheckFees: true },
  { name: 'Abbey Life', isCheckBenefits: true, isCheckFees: true },
  { name: 'AJ Bell', isCheckBenefits: true, isCheckFees: false },
  { name: 'Aviva', isCheckBenefits: true, isCheckFees: true },
  { name: 'Aegon', isCheckBenefits: true, isCheckFees: true },
  { name: 'Blackrock', isCheckBenefits: true },
  { name: 'B & CE', isCheckBenefits: true, isCheckFees: true },
  { name: 'Capita', isCheckBenefits: true, isCheckFees: true },
  { name: 'Clerical Medical', isCheckBenefits: true, isCheckFees: true },
  { name: 'Equitable Life', isCheckBenefits: true, isCheckFees: true },
  { name: 'Fidelity', isCheckBenefits: true, isCheckFees: true },
  { name: 'Friends Life', isCheckBenefits: true, isCheckFees: true },
  { name: 'Hargreaves Lansdown', isCheckBenefits: true, isCheckFees: false },
  { name: 'JLT', isCheckBenefits: true, isCheckFees: true },
  { name: 'Legal & General', isCheckBenefits: true, isCheckFees: true },
  { name: 'LV=', isCheckBenefits: true, isCheckFees: false },
  { name: 'Mercer', isCheckBenefits: true, isCheckFees: true },
  { name: 'MoneyFarm', isCheckBenefits: true, isCheckFees: false },
  { name: 'Nest', isCheckBenefits: false, isCheckFees: false },
  { name: 'Now Pensions', isCheckBenefits: false, isCheckFees: false },
  { name: 'Nutmeg', isCheckBenefits: false, isCheckFees: false },
  { name: 'Old Mutual Wealth', isCheckBenefits: true, isCheckFees: true },
  { name: 'Peoples Pension', isCheckBenefits: false, isCheckFees: false },
  { name: 'Pension Bee', isCheckBenefits: false, isCheckFees: false },
  { name: 'Phoenix Life', isCheckBenefits: true, isCheckFees: true },
  { name: 'Prudential', isCheckBenefits: true, isCheckFees: true },
  { name: 'Reassure', isCheckBenefits: true, isCheckFees: true },
  { name: 'Royal London', isCheckBenefits: true, isCheckFees: true },
  { name: 'Scottish Widows', isCheckBenefits: true, isCheckFees: false },
  { name: 'Standard Life', isCheckBenefits: true, isCheckFees: true },
  { name: 'Sun Life Financial of Canada', isCheckBenefits: true, isCheckFees: true },
  { name: 'Willis Towers Watson', isCheckBenefits: true, isCheckFees: true },
  { name: 'Zurich', isCheckBenefits: true, isCheckFees: true },
  { name: 'Not listed', isCheckBenefits: true, isCheckFees: true },
].map((m, index) => ({ ...m, id: index }));

export const NOT_LISTED_PROVIDER_ID: number = PENSION_PROVIDERS.length - 1;

interface IAppDataState {
  scenarioStartLink: string;
  ageUnder32: boolean;
  age40To49: boolean;
  ageOver55: boolean;
  selectedIncomingPension: IIncomingPension;
  selectedIncomingPensionId: number;
  incomingPensions: IIncomingPension[];
  inhousePensions: IInhousePension[];
  selectedInhousePensionIndex: number;
}

const initialState: IAppDataState = {
  scenarioStartLink: '/start1',
  ageUnder32: true,
  age40To49: false,
  ageOver55: false,
  selectedIncomingPension: {
    id: 0,
    provider: PENSION_PROVIDERS[0],
    unlistedProviderName: undefined,
    planNumber: undefined,
    estimatedValue: undefined,
    employerPayingIn: undefined,
    moneyTakenOut: undefined,
    onHold: undefined,
    isAdded: false,
  },
  selectedIncomingPensionId: 0,
  inhousePensions: [],
  incomingPensions: [],
  selectedInhousePensionIndex: 0,
};

const getIncomingPensionForId = (state: any) => {
  if (state && state.incomingPensions && state.selectedIncomingPensionId >= 0) {
    const selectedIncomingPension: IIncomingPension = state.incomingPensions.find(
      (pension: IIncomingPension) => pension.id === state.selectedIncomingPensionId
    );
    return selectedIncomingPension;
  }

  return undefined;
};

const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setScenarioStartLink: (state, action: PayloadAction<string>) => {
      state.scenarioStartLink = action.payload;
    },
    setAgeUnder32: (state, action: PayloadAction<boolean>) => {
      state.ageUnder32 = action.payload;
    },
    setAge40To49: (state, action: PayloadAction<boolean>) => {
      state.age40To49 = action.payload;
    },
    setAgeOver55: (state, action: PayloadAction<boolean>) => {
      state.ageOver55 = action.payload;
    },
    setInhousePensions: (state, action: PayloadAction<IInhousePension[]>) => {
      state.inhousePensions = action.payload;
    },
    addIncomingPension: (state) => {
      const storedIncomingPension = getIncomingPensionForId(state);

      if (storedIncomingPension) {
        storedIncomingPension.provider = state.selectedIncomingPension.provider;
        storedIncomingPension.planNumber = state.selectedIncomingPension.planNumber;
        storedIncomingPension.estimatedValue = state.selectedIncomingPension.estimatedValue;
        storedIncomingPension.employerPayingIn = state.selectedIncomingPension.employerPayingIn;
        storedIncomingPension.moneyTakenOut = state.selectedIncomingPension.moneyTakenOut;
        storedIncomingPension.onHold = state.selectedIncomingPension.onHold;
      } else {
        state.selectedIncomingPension.isAdded = true;
        state.incomingPensions.push(state.selectedIncomingPension);
      }
    },
    deleteIncomingPension: (state, action: PayloadAction<number>) => {
      let deleteIndex = -1;
      for (var i = 0, l = state.incomingPensions.length; i < l; i++) {
        if (state.incomingPensions[i].id === action.payload) {
          deleteIndex = i;
        }
      }
      if (deleteIndex >= 0) {
        state.incomingPensions.splice(deleteIndex, 1);
      }

      if (state.incomingPensions.length > 0) {
        state.selectedIncomingPensionId = state.incomingPensions[0].id;
        state.selectedIncomingPension = {
          id: state.incomingPensions[0].id,
          provider: state.incomingPensions[0].provider,
          planNumber: state.incomingPensions[0].planNumber,
          unlistedProviderName: state.incomingPensions[0].unlistedProviderName,
          estimatedValue: state.incomingPensions[0].estimatedValue,
          employerPayingIn: state.incomingPensions[0].employerPayingIn,
          moneyTakenOut: state.incomingPensions[0].moneyTakenOut,
          onHold: state.incomingPensions[0].onHold,
          isAdded: state.incomingPensions[0].isAdded,
        };
      } else {
        state.selectedIncomingPensionId = 0;
        state.selectedIncomingPension = {
          id: 0,
          provider: PENSION_PROVIDERS[0],
          unlistedProviderName: undefined,
          planNumber: undefined,
          estimatedValue: undefined,
          employerPayingIn: undefined,
          moneyTakenOut: undefined,
          onHold: undefined,
          isAdded: false,
        };
      }
    },
    setSelectedIncomingPensionId: (state, action: PayloadAction<number>) => {
      state.selectedIncomingPensionId = action.payload;
    },
    setSelectedInhousePensionIndex: (state, action: PayloadAction<number>) => {
      state.selectedInhousePensionIndex = action.payload;
    },
    setNewSelectedIncomingPension: (state) => {
      let newId = 0;
      if (state.incomingPensions.length > 0) {
        newId = state.incomingPensions[state.incomingPensions.length - 1].id + 1;
      }
      state.selectedIncomingPensionId = state.incomingPensions.length;
      state.selectedIncomingPension = {
        id: newId,
        provider: PENSION_PROVIDERS[0],
        unlistedProviderName: undefined,
        planNumber: undefined,
        estimatedValue: undefined,
        employerPayingIn: undefined,
        moneyTakenOut: undefined,
        onHold: undefined,
        isAdded: false,
      };
    },
    setSelectedIncomingPensionForIndex: (state, action: PayloadAction<number>) => {
      state.selectedIncomingPensionId = action.payload;
      const selectedIncomingPension = getIncomingPensionForId(state);
      if (selectedIncomingPension) {
        state.selectedIncomingPension = selectedIncomingPension;
      }
    },
    setProviderForSelectedPension: (state, action: PayloadAction<IPensionProvider>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.provider = action.payload;
      }
    },
    setUnlistedProviderNameForSelectedPension: (state, action: PayloadAction<string>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.unlistedProviderName = action.payload;
      }
    },
    setPlanNumberForSelectedPension: (state, action: PayloadAction<string>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.planNumber = action.payload;
      }
    },
    setEstimatedValueForSelectedPension: (state, action: PayloadAction<number>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.estimatedValue = action.payload;
      }
    },
    setEmployerPayingInForSelectedPension: (state, action: PayloadAction<boolean>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.employerPayingIn = action.payload;
      }
    },
    setMoneyTakenOutForSelectedPension: (state, action: PayloadAction<boolean | undefined>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.moneyTakenOut = action.payload;
      }
    },
    setOnHoldForSelectedPension: (state, action: PayloadAction<boolean>) => {
      if (state.selectedIncomingPension) {
        state.selectedIncomingPension.onHold = action.payload;
      }
    },
  },
});

export const {
  setScenarioStartLink,
  setAgeUnder32,
  setAge40To49,
  setAgeOver55,
  setInhousePensions,
  addIncomingPension,
  deleteIncomingPension,
  setNewSelectedIncomingPension,
  setSelectedIncomingPensionId,
  setSelectedIncomingPensionForIndex,
  setProviderForSelectedPension,
  setUnlistedProviderNameForSelectedPension,
  setPlanNumberForSelectedPension,
  setEstimatedValueForSelectedPension,
  setEmployerPayingInForSelectedPension,
  setMoneyTakenOutForSelectedPension,
  setOnHoldForSelectedPension,
  setSelectedInhousePensionIndex,
} = appDataSlice.actions;

export default appDataSlice.reducer;

// Export a reusable selector here
export const getScenarioStartLink = (state: RootState) => state.appData.scenarioStartLink;
export const isAgeUnder32 = (state: RootState) => state.appData.ageUnder32;
export const isAge40To49 = (state: RootState) => state.appData.age40To49;
export const isAgeOver55 = (state: RootState) => state.appData.ageOver55;
export const getNumInhousePensions = (state: RootState) => state.appData.inhousePensions.length;
export const getInhousePensions = (state: RootState) => state.appData.inhousePensions;
export const getSelectedInhousePensionIndex = (state: RootState) => state.appData.selectedInhousePensionIndex;
export const getInhousePensionForSelectedIndex = (state: RootState) =>
  state.appData.inhousePensions[state.appData.selectedInhousePensionIndex];
export const getNumIncomingPensions = (state: RootState) => state.appData.incomingPensions.length;
export const getIncomingPensions = (state: RootState) => state.appData.incomingPensions;
export const getSelectedIncomingPensionId = (state: RootState) => state.appData.selectedIncomingPensionId;
export const getSelectedIncomingPension = (state: RootState) => state.appData.selectedIncomingPension;
export const getNumIncomingPensionsForTransfer = (state: RootState) =>
  state.appData.incomingPensions.filter((pension: IIncomingPension) => !pension.onHold).length;
export const getNumIncomingPensionsOnHold = (state: RootState) =>
  state.appData.incomingPensions.filter((pension: IIncomingPension) => pension.onHold).length;

//   export const getSelectedIncomingPension = createSelector(
//   getIncomingPensions,
//   getselectedIncomingPensionId,
//   (pensions: IIncomingPension[], selectedId: number) => {
//     if (pensions && selectedId >= 0) {
//       return pensions.find((pension) => pension.id === selectedId);
//     }
//     return undefined;
//   }
// );
