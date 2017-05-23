import {SET_ROUTE} from '../../actions/routes';

export default (state = '/', action) => {
  switch (action.type) {
    case SET_ROUTE:
      return action.payload;
    default:
      return state;
  }
};
