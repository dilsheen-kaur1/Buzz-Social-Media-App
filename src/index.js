import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore } from 'redux'
//import allReducers from './AllReducers'
import {Provider} from 'react-redux'

// let store = createStore(allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ReactDOM.render(
//   // <Provider store={store}>
//     <App />,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

