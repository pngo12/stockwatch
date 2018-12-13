import axios from 'axios';
import {
    RECEIVED_ALL_DATA,
    WRONG_SYMBOL,
    IS_LOADING,
    GET_DATA
} from '../constants';

export const getData = ticker => async dispatch => {
    try {
        const getAllData = await axios.all([
            axios.get(process.env.REACT_APP_API + `/${ticker}/quote`),
            axios.get(process.env.REACT_APP_API + `/${ticker}/company`),
            axios.get(process.env.REACT_APP_API + `/${ticker}/earnings`),
            axios.get(process.env.REACT_APP_API + `/${ticker}/peers`),
            axios.get(process.env.REACT_APP_API + `/${ticker}/chart/1d`),
            axios.get(process.env.REACT_APP_API + `/${ticker}/news`),
        ])
        const [quote, company, earnings, peers, chart, news] = getAllData
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
        });
    }
    catch (error) {
        dispatch({ type: WRONG_SYMBOL, payload: error.response })
    }
}

export const getChartDate = (range, ticker) => async dispatch => {
    dispatch({ type: IS_LOADING });
    try {
        const chartData = await axios.get(process.env.REACT_APP_API + `/${ticker}/chart/${range}`);
        dispatch({ type: GET_DATA, payload: chartData.data })
    }
    catch (err) {
        console.log(err);
    }
}

