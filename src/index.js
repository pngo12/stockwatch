import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import getData from './Redux/Reducer/chartdata';
import loading from './Redux/Reducer/loading';
import Dashboard from './components/stock_dashboard/dashboard';

const rootReducer = combineReducers({
    loading,
    getData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/dashboard/:id' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();