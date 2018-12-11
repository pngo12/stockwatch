import axios from 'axios';
import {
    RECEIVED_ALL_DATA,
    WRONG_SYMBOL,
    IS_LOADING,
    GET_DATA
} from '../Constants';

export const getData = ticker => dispatch => {

    axios.all([
        axios.get(process.env.REACT_APP_API+`${ticker}/quote`),
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

