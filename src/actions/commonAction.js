import * as types from './actionTypes';

export function setHref(url) {
    return {
        type: types.SET_HREF,
        url
    }
}