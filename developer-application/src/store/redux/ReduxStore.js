import { configureStore } from '@reduxjs/toolkit';
import developerInfoSlice from './developerInfo-slice';
import navigationStatusSlice from './navigationStatus-slice';
import skillsSlice from './skills-slice';

const store = configureStore({
    reducer: { formInfo: developerInfoSlice.reducer, skills: skillsSlice.reducer, navigationStatus: navigationStatusSlice.reducer}
});

export default store;
