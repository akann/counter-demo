
import {INCREMENT, DECREMENT, RESET} from '../../actions/counter/index';

export default (state = {count: 0, id: 0}, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + 1, id: action.id});
    case DECREMENT:
      return Object.assign({}, state, {count: state.count - 1, id: action.id});
    case RESET:
      return Object.assign({}, state, {count: 0, id: action.id});
    default:
      return state;
  }
};
