import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import Dashboard from './components/stock_dashboard/dashboard'
import WatchListDashboard from './components/watchlist/watchlist-dashboard'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
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
