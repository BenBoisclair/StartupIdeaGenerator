'use client';

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface StartupState {
    startup: string
}

export const initialState: StartupState = {
    startup: ''
}

export const startupSlice = createSlice({
    name: 'startup',
    initialState,
    reducers: {
        rehydrate(state, action: PayloadAction<StartupState>) {
            state.startup = action.payload.startup
        },
        setStartup(state, action: PayloadAction<string>) {
            state.startup = action.payload;
        },
    }
})

export const { setStartup } = startupSlice.actions;

export default startupSlice.reducer;