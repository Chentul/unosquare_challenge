import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { pokedexReducer } from './area/pokedex/state/pokedex.reducer.js';
import AppRoot from './shared/app-root/app-root.component';

const store = createStore(
  pokedexReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('root')
);