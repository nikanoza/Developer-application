import { createSlice } from "@reduxjs/toolkit";

const initialDeveloperState = {
    personalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: 5,
    },
    skils: [],
    covidInfo: {
        workAt: '',
        status: false,
        covidLastDate: '',
        vaccine: false,
        lastVaccineDate: ''
    },
    more: {
        attendStatus: false,
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
        }
    }
});

export const developerInfoActions = developerInfoSlice.actions;

export default developerInfoSlice;