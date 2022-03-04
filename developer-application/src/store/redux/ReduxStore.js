import { configureStore } from '@reduxjs/toolkit';
import developerInfoSlice from './developerInfo-slice';
import skillsSlice from './skills-slice';

const store = configureStore({
    reducer: { formInfo: developerInfoSlice.reducer, skills: skillsSlice.reducer}
});

export default store;
