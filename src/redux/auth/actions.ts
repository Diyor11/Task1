import { UserType } from "../../types"
import {LOGIN_SUCCESS} from './types'

export type AuthActionType = {
    type: string,
    payload: UserType
} 
export const login = (payload: UserType) => {
    window.localStorage.setItem('isLoggedIn', 'true')
    window.location.pathname = '/'

    return ({
        type: LOGIN_SUCCESS,
        payload 
    })
}