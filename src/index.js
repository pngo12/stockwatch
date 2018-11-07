import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getData from './redux/reducer/chartdata';
import loading from './redux/reducer/loading';
import watchlisthelper from './redux/reducer/watchlisthelper';
import Dashboard from './components/stock_dashboard/dashboard';
import WatchListDashboard from './components/watchlist/watchlist-dashboard';

const rootReducer = combineReducers({
     loading,
     getData,
     watchlisthelper
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