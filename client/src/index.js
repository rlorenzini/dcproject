import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import App from './App';
import History from './components/History'
import UseofForce from './components/UseofForce'

import BaseLayout from './components/BaseLayout';


import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { devToolsEnhancer } from 'redux-devtools-extension';
import {BrowserRouter, Switch, Route} from 'react-router-dom';





ReactDOM.render(

<BrowserRouter>
<BaseLayout>
<Switch>
<Route path='/' exact component={App}/>
<Route path='/history' component={History}/>
<Route path='/force' component={UseofForce}/>
</Switch>
</BaseLayout>
</BrowserRouter>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
