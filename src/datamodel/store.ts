import { AnyAction, configureStore } from '@reduxjs/toolkit';
import exampleReducer from './example/exampleSlice';
import launcherReducer from './launcher/launcherSlice';
import { logger } from './middleware';

const store = configureStore({
  reducer: {
    example: exampleReducer,
    launcher: launcherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type Action = AnyAction;

export default store;
