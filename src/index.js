import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/index';
import My404Component from '../src/components/PageNotFound';
import Register from '../src/components/register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/sign-up" component={Register} />
                <Route component={My404Component} />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
