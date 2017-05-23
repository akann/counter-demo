import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';

import AppContainer from '../../react/components/main/AppContainer';
import CounterMultiContainer from '../../react/components/counter/CounterMultiContainer';
import {addAction} from '../../react/store/actions/counter/multi';
import {setRouteAction} from '../../react/store/actions/routes/index';
import CounterSingleContainer from '../../react/components/counter/CounterSingleContainer';

const router = express.Router();

export default router;

router.get('/', (request, response) => {
  request.url = '/counter';

  router.handle(request, response);

});

router.get('/:slug', (request, response) => {
  const model = {};
  const store = response.locals.store;

  store.dispatch(setRouteAction(`${request.params.slug}`));
  store.dispatch(addAction());
  store.dispatch(addAction());

  const state = store.getState();
  model.preloadedState = JSON.stringify(state);

  model.appContainer = renderToString(
      <Provider store={store}>
          <AppContainer>
              <CounterSingleContainer />
              <CounterMultiContainer />
          </AppContainer>
      </Provider>);

  response.status(200).render('pages/demo', model);
});

