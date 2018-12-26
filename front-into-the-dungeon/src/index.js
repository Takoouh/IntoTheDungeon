import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducer as formReducer } from "redux-form"

import { BrowserRouter } from "react-router-dom"

import itemsReducer from "./_reducers/itemsReducer"
import loadingApiReducer from './_reducers/loadingApiReducer';
import loadingStatsReducer from './_reducers/loadingStatsReducer';
import adventurerReducer from './_reducers/adventurerReducer';
import floorsReducer from './_reducers/floorsReducer';
import battleViewReducer from './_reducers/battleViewReducer';
import getMonstersReducer from './_reducers/getMonstersReducer';
import monsterReducer from './_reducers/monsterReducer';


const rootReducer = combineReducers({
  battleView: battleViewReducer,
  floorList: floorsReducer,
  monsterList: getMonstersReducer,
  monster: monsterReducer,
  items: itemsReducer,
  adventurer: adventurerReducer,
  loadingApi: loadingApiReducer,
  loadingStats: loadingStatsReducer,
  form: formReducer
})

const store = createStore(
  rootReducer,
  // applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
