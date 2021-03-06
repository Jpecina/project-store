import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';
import { MuiThemeProvider } from 'material-ui/styles';

ReactDOM.render(

    <Provider store = {store}>
        <Router>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>    
        </Router>
    </Provider>
    , document.getElementById('root'));
