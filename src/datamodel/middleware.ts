import { AnyAction, Store } from '@reduxjs/toolkit';
//import { Middleware } from 'redux';

// TODO: need to use generics rather than typing based on store as that is circular
export const logger = <S, A extends AnyAction>(store: Store<S, A>) => (next: (action: A) => any) => (action: A) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

/*
export interface Middleware<
  DispatchExt = {},
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: Dispatch<AnyAction>
  ) => (action: any) => any
}
*/
