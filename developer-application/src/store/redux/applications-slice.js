import { createSlice } from "@reduxjs/toolkit";


const applicationsSlice = createSlice({
    name: 'applications',
    initialState: { applications: []},
    reducers: {
        updateApplications(state,action){
            state.applications = action.payload;
        }
    }
});

export const applicationsActions = applicationsSlice.actions;

export default applicationsSlice;