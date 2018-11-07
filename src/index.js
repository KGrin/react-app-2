import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import REDUCERS from './reducers'

import App from './components/App'

const store = createStore(combineReducers(REDUCERS), window.STATE_FROM_SERVER)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
  console.log(store.getState());
});