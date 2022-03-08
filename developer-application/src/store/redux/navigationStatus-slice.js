import { createSlice } from "@reduxjs/toolkit";

const initialDeveloperState = {
    personalInfoPage: false,
    technicalSkillPage: false,
    covidInformationPage: false,
    aboutPage: false
}

const navigationStatusSlice = createSlice({
    name: 'navigationStatus',
    initialState: initialDeveloperState,
    reducers: {
        updateStatus(state,action){
            state[action.payload.property] = action.payload.status;
        }
    }
});

export const navigationStatusfoActions = navigationStatusSlice.actions;

export default navigationStatusSlice;