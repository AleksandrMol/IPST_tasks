import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import axios from 'axios';
import registerReducer from '../features/Autorization/registerSlise';
import foldersReducer from '../features/Folders/getFolders';
import pathReducer from '../features/Path/pathSlice';


export const store = configureStore({
    reducer: {
       token: registerReducer,
       foldersData: foldersReducer,
       path: pathReducer,
    },
    middleware:  getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axios
      }
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;