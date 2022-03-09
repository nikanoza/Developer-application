import { createSlice } from "@reduxjs/toolkit";

const initialDeveloperState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
    },
    skils: [],
    covidInfo: {
        workAt: '',
        status: '',
        covidLastDate: '',
        vaccine: '',
        lastVaccineDate: ''
    },
    more: {
        attendStatus: '',
        aboutDevtalk: '',
        special: ''
    }
}

const developerInfoSlice = createSlice({
    name: 'developerInfo',
    initialState: initialDeveloperState,
    reducers: {
        updatePersonalInfo(state, action){
            state.personalInfo[action.payload.property] = action.payload.value;
        },
        addSkill(state,action){
            state.skils.push({title: action.payload.title, experience: action.payload.year});
        },
        removeSkill(state,action){
            const skillIndex = state.skils.findIndex( skill => skill.title === action.payload);
            state.skils.splice(skillIndex, 1);
        },
        updateCovidInfo(state,action){
            state.covidInfo[action.payload.property] = action.payload.value;
        },
        updateMoreInfo(state,action){
            state.more[action.payload.property] = action.payload.value;
        }
    }
});

export const developerInfoActions = developerInfoSlice.actions;

export default developerInfoSlice;