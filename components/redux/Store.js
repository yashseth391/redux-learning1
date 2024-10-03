import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Assuming RootReducer is the combined reducer

const store = configureStore({
    reducer: rootReducer, // file ka naam reducer hai nikalne ke liye 
});

export default store;
