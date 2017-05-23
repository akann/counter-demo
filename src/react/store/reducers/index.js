
import { combineReducers } from 'redux';

import counters from './counter/multi';
import route from './routes';

export default combineReducers({
  hello: (state = 0) => state,
  counters,
  route
});
