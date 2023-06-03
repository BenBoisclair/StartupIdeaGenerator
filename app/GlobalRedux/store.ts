'use client'
import { createAsyncThunk, createSlice, Action, PayloadAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import ideaReducer from './ideaSlice'
import startupReducer from './startupSlice'

export const store = configureStore({
    reducer: {
        idea: ideaReducer,
        startup: startupReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const selectCountry = (state: RootState) => state.idea.country;
export const selectStartup = (state: RootState) => state.startup.startup;
