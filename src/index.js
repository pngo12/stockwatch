import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import chartData from './Redux/Reducer/chartdata';
import loading from './Redux/Reducer/loading';
import watchlist from './Redux/Reducer/watchlist';
import Dashboard from './components/StockDashboard/Dashboard';
import WatchListDashboard from './components/Watchlist/WatchListDashboard';

const rootReducer = combineReducers({
     loading,
     chartData,
     watchlist
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
        <Route path='/' component={App} exact/>
        <Route path='/dashboard/:id' component={Dashboard}/>
        <Route path='/watchlist' component={WatchListDashboard} />
    </Switch>
    </BrowserRouter>
</Provider>,

document.getElementById('root'));
registerServiceWorker();