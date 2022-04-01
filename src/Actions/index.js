import {FETCH_TODO_SUCCESS} from '../Types';

export const saveTodos = data => ({
  type: FETCH_TODO_SUCCESS,
  payload: data,
});

// function untuk mendapatkan data todos
export const getTodos = () => {
    return async (dispatch) => {
        const resTodos = await axios.get('http://code.aldipee.com/api/v1/todos')
        if (resTodos.data.results.length > 0) {
            dispatch(saveTodos(resTodos.data.results))
        }
    }
}