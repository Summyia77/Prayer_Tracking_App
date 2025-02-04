import { createStore } from 'redux';


const initialState = {
    selectedDate: ''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_DATE':
            return {
                ...state,
                selectedDate: action.payload
            };
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store;
