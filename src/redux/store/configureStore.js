import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/users'
import employeeReducer from '../reducers/employees'


const configureStore = () => {

    const store = createStore(combineReducers({
        user: userReducer,
        employee: employeeReducer
    }))

    return store

}

export default configureStore