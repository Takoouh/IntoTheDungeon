import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom"

import itemsReducer from "./_reducers/itemsReducer"
import loadingApiReducer from './_reducers/loadingApiReducer';
import loadingStatsReducer from './_reducers/loadingStatsReducer';
import statsReducer from './_reducers/statsReducer';
import floorsReducer from './_reducers/floorsReducer';
import battleViewReducer from './_reducers/battleViewReducer';
import getMonstersReducer from './_reducers/getMonstersReducer';


const rootReducer = combineReducers({
  battleView: battleViewReducer,
  floorList: floorsReducer,
  monsterList: getMonstersReducer,
  items: itemsReducer,
  stats: statsReducer,
  loadingApi: loadingApiReducer,
  loadingStats: loadingStatsReducer
})

const store = createStore(
  rootReducer,
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
