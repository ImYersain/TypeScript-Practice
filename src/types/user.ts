export interface UserState {
    users: Array<any>
    loading: boolean
    error: string | null
}


export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}
interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: Array<any>
}
interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

