import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers(
    {
        reducer: cartReducer,

        // Add more reducers here
    });

export default rootReducer