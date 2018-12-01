import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import itemsReducer from "./_reducers/itemsReducer"
import loadingReducer from './_reducers/loadingReducer';


const rootReducer = combineReducers({
  items: itemsReducer,
  loading: loadingReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
