import {FETCH_TODO_SUCCESS} from '../Types';
const initialState = {
  todos: '',
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
