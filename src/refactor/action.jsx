import { ADD_LOGIN, ADD_REGISTER } from "./actiontype"


export const registerdata = (data) => {
    return {
        type:ADD_REGISTER,
        payload:data
    }
}

export const addlogin = (data) => {
    return {
        type:ADD_LOGIN,
        payload:data
    }
}