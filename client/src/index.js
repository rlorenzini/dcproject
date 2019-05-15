import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import Login from './components/Login';
import Register from './components/Register'
import History from './components/History.js';
import UseofForce from './components/UseofForce.js';
import Detained from './components/Detained.js';
import Searched from './components/Searched.js';
import Interactions from './components/Interactions.js';
import Miranda from './components/Miranda.js';
import Terms from './components/Terms.js';
import Articles from './components/RedditAPI.js';
import requireAuth from './components/requireAuth.js';
import TestMyAPI from './components/TestMyAPI.js';


import BaseLayout from './components/BaseLayout';


import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {setAuthenticationHeader} from './utils/authentication';
import reducer from './store/reducers/reducer';

import { devToolsEnhancer } from 'redux-devtools-extension';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const store = createStore(reducer,devToolsEnhancer());
setAuthenticationHeader(localStorage.getItem('jsonwebtoken'))



ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<BaseLayout>
<Switch>
<Route path='/' exact component={App}/>
<Route path='/login' component={Login}/>
<Route path='/register' component={Register}/>
<Route path='/history' component={requireAuth(History)}/>
<Route path='/force' component={requireAuth(UseofForce)}/>
<Route path='/detained' component={requireAuth(Detained)}/>
<Route path='/search' component={requireAuth(Searched)}/>
<Route path='/interactions' component={requireAuth(Interactions)}/>
<Route path='/miranda' component={requireAuth(Miranda)}/>
<Route path='/terms' component={requireAuth(Terms)}/>
<Route path='/articles' component={requireAuth(Articles)}/>
<Route path='/TestMyAPI' component={TestMyAPI}/>
</Switch>
</BaseLayout>
</BrowserRouter>
</Provider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
