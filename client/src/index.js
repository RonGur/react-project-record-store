import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import {Provider} from 'react-redux'
import store from './components/cart/store'


const app = <Provider store={store}>
    <Router><App /></Router>
</Provider>


ReactDom.render(

    app, document.getElementById('root')
);