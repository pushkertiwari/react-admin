import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

function setHrefReducer(state = [], action) {
    switch (action.type) {
        case types.SET_HREF:
            return action.url;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ setHrefReducer });

export default rootReducer;