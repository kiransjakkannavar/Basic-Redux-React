import { ADD_EMAIL, ADD_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes'

export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        payload: email
    }
}


export const addPassword = (password) => {
    return {
        type: ADD_PASSWORD,
        payload: password
    }
}


export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
}


export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

