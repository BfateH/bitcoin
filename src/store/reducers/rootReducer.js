import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import avarageReducer from "./avarageReducer";
import globalReducer from "./globalReducer";

export default combineReducers({
    global: globalReducer,
    home: homeReducer,
    avarage: avarageReducer
});