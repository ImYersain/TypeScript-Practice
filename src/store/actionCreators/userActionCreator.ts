import axios from "axios"
import { Dispatch } from "redux"
import { UserActions, UserActionTypes } from '../../types/user';

export const fetchUsers = ():any => async  (dispatch: Dispatch<UserActions>) => {
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        setTimeout(() => {
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }, 500)

    } catch (error) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR, 
            payload: 'Request was be with error'})
    }
}