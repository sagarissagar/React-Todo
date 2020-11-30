import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension'; 

const store = createStore(rootReducer,composeWithDevTools()); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// store => actually contains all state in it which is accessible by actions and dispatch.
// provider => You pass the store in as a prop to the Provider only. It wraps around your root component.
// createStore => use to create store