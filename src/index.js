import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import rootReducer from '../src/redux/rootReducer'
import {Provider} from 'react-redux'

// import rootReducer from '../src/redux/rootReducer'
// let store = createStore(combineReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />,
//   </Provider>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);