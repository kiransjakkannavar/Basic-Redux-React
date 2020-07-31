import {FETCH_EMPLOYEES} from '../constants/actionTypes'


export const getEmployees = ()=>{
    return {
        type:FETCH_EMPLOYEES
    }
}