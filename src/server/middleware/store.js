import configureStore from '../../react/store/configure-store';

export default (request, response, next) => {
  const store = configureStore({}, {});

  response.locals.store = store;

  next();
};
