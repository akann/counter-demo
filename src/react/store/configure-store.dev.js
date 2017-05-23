
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  level: {
    prevState: () => false,
    nextState: () => false,
    action: ({type}) => type.indexOf('REJECTED') !== -1 ? 'log' : false,
    error: () => 'error'
  },
  duration: true, // Print the duration of each action?
  logErrors: true // Should the logger catch, log, and re-throw errors?
});

export default (initialState, api, middlewares = []) => {
  const _window = typeof window === 'undefined' ? {} : window;

  const thunkMiddleware = thunk.withExtraArgument({
    api,
    win: _window
  });

  const allMiddleware = [thunkMiddleware, reduxPromiseMiddleware(), ...middlewares, logger];

  const enhancer = compose(
        applyMiddleware(...allMiddleware),
        _window.devToolsExtension ? _window.devToolsExtension() : f => f
    );

  return createStore(rootReducer, initialState, enhancer);
};

