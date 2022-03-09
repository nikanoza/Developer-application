import { configureStore } from '@reduxjs/toolkit';
import applicationsSlice from './applications-slice';
import developerInfoSlice from './developerInfo-slice';
import navigationStatusSlice from './navigationStatus-slice';
import skillsSlice from './skills-slice';

const store = configureStore({
    reducer: { formInfo: developerInfoSlice.reducer, 
        skills: skillsSlice.reducer, 
        navigationStatus: navigationStatusSlice.reducer,
        applications: applicationsSlice.reducer
    }
});

export default store;
