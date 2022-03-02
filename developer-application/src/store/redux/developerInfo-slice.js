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
            console.log(action.peyload);
            //state.personalInfo[action.payload['property']] = action.payload.setvalue;
        }
    }
});

export const developerInfoActions = developerInfoSlice.actions;

export default developerInfoSlice.reducer;