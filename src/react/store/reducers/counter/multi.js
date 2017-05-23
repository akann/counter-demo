
import {INCREMENT, DECREMENT, RESET} from '../../actions/counter/index';
import counter from './index';
import {ADD, REMOVE} from '../../actions/counter/multi';

export default (state = [], action) => {
  const nextId = state.length ? Math.max.apply(null, state.map(item => item.id)) + 1 : 0;
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {id: nextId, count: 0}
      ];
    case REMOVE:
      return state.filter(item => {
        return item.id !== action.id;
      });
    case INCREMENT:
    case DECREMENT:
    case RESET:
      return state.map(item => {
        if (item.id === action.id) {
          return counter(state.find(item => item.id === action.id), action);
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
