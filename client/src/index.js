import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import App from './App';
import History from './components/History.js';
import UseofForce from './components/UseofForce.js';
import Detained from './components/Detained.js';
import Searched from './components/Searched.js';
import Interactions from './components/Interactions.js';
import Miranda from './components/Miranda.js';
import Terms from './components/Terms.js';
import Articles from './components/RedditAPI.js';

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
<Route path='/detained' component={Detained}/>
<Route path='/search' component={Searched}/>
<Route path='/interactions' component={Interactions}/>
<Route path='/miranda' component={Miranda}/>
<Route path='/terms' component={Terms}/>
<Route path='/articles' component={Articles}/>
</Switch>
</BaseLayout>
</BrowserRouter>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
