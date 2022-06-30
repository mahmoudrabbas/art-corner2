import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import {Provider} from 'react-redux'
import store from './redux/store';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))