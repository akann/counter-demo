
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './react/store/configure-store';
import AppContainer from './react/components/main/AppContainer';
import CounterMultiContainer from './react/components/counter/CounterMultiContainer';
import {setRouteAction} from './react/store/actions/routes/index';
import CounterSingleContainer from './react/components/counter/CounterSingleContainer';

(() => {
  // Grab the state from a global injected into server-generated HTML
  const preloadedState = window.__PRELOADED_STATE__;

  // Create Redux store with initial state
  const store = configureStore(preloadedState, {});
  store.dispatch(setRouteAction(store.getState().route));

  render(
      <Provider store={store}>
          <AppContainer>
              <CounterSingleContainer />
              <CounterMultiContainer />
          </AppContainer>
      </Provider>,
    document.getElementById('root')
  );
  // Indicate JS has loaded
  document.body.className += ' js-loaded';
})();

