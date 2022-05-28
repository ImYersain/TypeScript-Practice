import axios from "axios";
import { Dispatch } from "redux";
import { TodoActions, TodoActionTypes } from '../../types/todo';


export const fetchTodos = (page:number = 1, limit:number = 10):any => async  (dispatch: Dispatch<TodoActions>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODO})
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {_page: page, _limit: limit}
        })

        setTimeout(() => {
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        }, 500)

    } catch (error) {
        dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'oops, something is wrong'})
    }
}


export function setTodoPage(page: number):TodoActions{
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}