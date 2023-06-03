'use client';

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IdeaState {
    industry: string[];
    country: string;
    income: string;
    occupation: string;
    gender: string;
}

export const initialState: IdeaState = {
    industry: [],
    country: '',
    income: '',
    occupation: '',
    gender: '',
}

export const ideaSlice = createSlice({
    name: 'idea',
    initialState,
    reducers: {
        rehydrate(state, action: PayloadAction<IdeaState>) {
            state.industry = action.payload.industry;
            state.country = action.payload.country;
            state.income = action.payload.income;
            state.occupation = action.payload.occupation;
        },
        setIndustry(state, action: PayloadAction<string[]>) {
            state.industry = action.payload;
        },
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
        setIncome(state, action: PayloadAction<string>) {
            state.income = action.payload;
        },
        setOccupation(state, action: PayloadAction<string>) {
            state.occupation = action.payload;
        },
        setGender(state, action: PayloadAction<string>) {
            state.gender = action.payload;
        }
    }
})

export const { rehydrate, setIndustry, setCountry, setIncome, setOccupation, setGender } = ideaSlice.actions;

export default ideaSlice.reducer;