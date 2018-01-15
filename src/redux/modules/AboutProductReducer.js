import {
    API_GET_CAT_ROOT,
} from '../constants/api'

import request from '../utils/request'

import {
    getAuthorization,
    parseObjects,
    findById
} from '../utils/helper'

const GET_CAT_ROOT = 'API_GET_CAT_ROOT'

export const getCatRoot = () => (dispatch, getState) => {
    dispatch({
        type: GET_CAT_ROOT,
        payload: {
            promise: request.get(API_GET_CAT_ROOT)
        }
    })
}
const initialState = {
    cats: '',
}

export default function AboutProductReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_CAT_ROOT}_FULFILLED`:
            return {
                cats: action.payload
            };
        default:
            return {
            }
    }
}
