import axios from "axios";
import { SET_BTC, SET_DOLLAR, SET_INITIALIZED } from "./actionsTypes";

export function setInitialized() {
    return {
        type: SET_INITIALIZED
    }
}

export function setBTC(value) {
    return {
        type: SET_BTC,
        payload: value
    }
}

export function setDollar(value) {
    return {
        type: SET_DOLLAR,
        payload: value
    }
}

export const fetchSetBTC = () => {
    return async dispatch => {
        const resp_btc = await axios.get('https://blockchain.info/ru/ticker');
        dispatch(setBTC(resp_btc.data.USD.last));
        const resp_dollar = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        dispatch(setDollar(resp_dollar.data.Valute.USD.Value));
        dispatch(setInitialized());
    }    
}
