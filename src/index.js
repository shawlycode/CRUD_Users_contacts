import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './components/Store/Store';
import {Provider} from 'react-redux';

ReactDOM.render(
  
    <Provider store ={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


