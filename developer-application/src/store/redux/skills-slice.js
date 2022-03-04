import { createSlice } from "@reduxjs/toolkit";

const initialSkillsState = {
    skills: []
}

const skillsSlice = createSlice({
    name: 'skills',
    initialState: initialSkillsState,
    reducers: {
        updateSkills(state, action){
            state.skills = action.payload.skills;
        }
    }
});

export const fetchSkillsData = () =>{
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://bootcamp-2022.devtest.ge/api/skills');

            if(!response.ok){

            }

            const data = response.json();
            return data;
        };

        try{
            const skillsData = await fetchData();
            dispatch(skillsActions.updateSkills({skills: skillsData}));
        }catch (error){

        };
    }
}

export const skillsActions = skillsSlice.actions;

export default skillsSlice;