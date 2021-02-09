import { SET_BTC, SET_DOLLAR, SET_INITIALIZED } from '../actions/actionsTypes';

const initial_value = {
    initialized: false,
    btc: 0,
    dollar: 0
};

export default function globalReducer(state = initial_value, action) {
    switch(action.type) {
        case SET_DOLLAR:
            return {
                ...state,
                dollar: action.payload
            }            
        case SET_BTC:
            return {
                ...state,
                btc: action.payload
            }
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}