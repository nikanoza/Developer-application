import { configureStore } from '@reduxjs/toolkit';
import developerInfoSlice from './developerInfo-slice';

const store = configureStore({
    reducer: { formInfo: developerInfoSlice.reducer}
});

export default store;
