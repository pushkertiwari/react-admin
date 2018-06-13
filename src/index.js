import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/index';
import My404Component from '../src/components/PageNotFound';
import Register from '../src/components/register';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/sign-up" component={Register} />
                <Route component={My404Component} />
            </Switch>
        </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
