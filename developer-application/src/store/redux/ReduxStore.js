import { configureStore } from '@reduxjs/toolkit';
import developerInfoReducer from './developerInfo-slice';

const store = configureStore({
    reducer: { formInfo: developerInfoReducer}
});

export default store;
