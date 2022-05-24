import { AnyAction, configureStore } from '@reduxjs/toolkit';
import appDataReducer from './appdataslice';
import { logger } from './middleware';

const store = configureStore({
  reducer: {
    appData: appDataReducer,
  },
  // uncomment teh line below in dev if wanting to see redux state changes being logged
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Action = AnyAction;

export default store;
