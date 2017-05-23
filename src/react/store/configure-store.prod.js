
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const createLogger = logger => () => next => action => {
  if (logger && action.type.indexOf('_REJECTED') > -1) {
    logger('error', action.payload);
  }

  return next(action);
};

export default (initialState, api, middlewares = [], logger) => {

  const thunkMiddleware = thunk.withExtraArgument({
    api,
    win: window
  });

  const allMiddleware = [thunkMiddleware, reduxPromiseMiddleware(), ...middlewares, createLogger(logger)];

  const enhancer = compose(applyMiddleware(...allMiddleware));

  return createStore(rootReducer, initialState, enhancer);
};
