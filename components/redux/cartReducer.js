
import { ADD_ITEM } from './constant';

const initialState = []

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_ITEM:
            console.log("hello");

            const newState = [
                ...state,       // Spread the previous state (existing items in the cart)
                action.data     // Add the new item (action.data)
            ];
            console.log(newState);
            return newState
        default:
            return state;
    }
};

export default cartReducer;
