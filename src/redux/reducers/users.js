import { ADD_EMAIL, ADD_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/actionTypes'

let initialState = {
    isLoading: false,
    authenticated: false,
    redirect: false,
    email: "",
    password: "",
    error: null
};


const userReducer = (state = initialState, action = {}) => {


    switch (action.type) {
        case ADD_EMAIL:
            return { ...state, email: action.payload }

        case ADD_PASSWORD:
            return { ...state, password: action.payload }

        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, authenticated: true, redirect: true, error: null }

        case LOGIN_FAILURE:
            return { ...state, isLoading: false, authenticated: false, redirect: false, error: action.payload }

        default:
            return state

    }
}

export default userReducer