import axios from 'axios';
import {
    RECEIVED_ALL_DATA,
    ADD_TO_WATCHLIST,
    REMOVE_STOCK_FROM_WATCHLIST,
    WRONG_SYMBOL,
    IS_LOADING,
    GET_DATA,
    FLIP_CLICKED
} from '../Constants';

export const getData = ticker => dispatch => {

    axios.all([
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/company`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/earnings`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/peers`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/1d`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/news`),
    ])
        .then(axios.spread((quote, company, earnings, peers, chart, news) => {
            dispatch({
                type: RECEIVED_ALL_DATA,
                payload: {
                    quote: quote.data,
                    company: company.data,
                    earnings: earnings.data,
                    peers: peers.data,
                    chart: chart.data,
                    ticker: quote.data.symbol,
                    news: news.data,
                }
            })
        }))
        .catch(err => {
            dispatch({ type: WRONG_SYMBOL, payload: err.response });
        })
}

export const getChartDate = (range, ticker) => async dispatch => {
    dispatch({ type: IS_LOADING });
    try {
        const chartData = await axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/${range}`);
        dispatch({ type: GET_DATA, payload: chartData.data })
    }
    catch (err) {
        console.log(err);
    }
}

export const addToWatchlist = ticker => async dispatch => {
    try {
        const addToWatchlist = await axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`);
        dispatch({ type: ADD_TO_WATCHLIST, payload: addToWatchlist.data });
    }
    catch (err) {
        console.log(err);
    }
}

export const removeFromWatchlist = id => dispatch => dispatch({ type: REMOVE_STOCK_FROM_WATCHLIST, payload: id });

export const flipClicked = () => dispatch => dispatch({ type: FLIP_CLICKED });

