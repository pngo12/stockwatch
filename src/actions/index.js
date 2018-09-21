import axios from 'axios'
import { RECEIVED_ALL_DATA, ADD_TO_WATCHLIST, REMOVE_STOCK_FROM_WATCHLIST, GET_NEW_CHART_DATE, WRONG_SYMBOL } from '../constants'

export const getData = ticker => dispatch => {
    axios.all([
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/company`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/earnings`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/peers`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/1d`)
    ])
        .then(axios.spread((quote, company, earnings, peers, chart) => {
            console.log(quote.data.symbol)
            dispatch({
                type: RECEIVED_ALL_DATA,
                payload: {
                    quote: quote.data,
                    company: company.data,
                    earnings: earnings.data,
                    peers: peers.data,
                    chart: chart.data,
                    ticker: quote.data.symbol
                }
            })
        }))
        .catch(err => {
            dispatch({ type: WRONG_SYMBOL, payload: err.response })
        })
}

export const addToWatchlist = ticker => dispatch => {
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`)
        .then(res => {
            dispatch({
                type: ADD_TO_WATCHLIST,
                payload: res.data
            })
        })
}

export const removeFromWatchlist = id => dispatch => {
    dispatch({ type: REMOVE_STOCK_FROM_WATCHLIST, payload: id })
}

// export const getChartDate = range => dispatch => {
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/chart/${range}`)
//         .then(res => {
//             dispatch({
//                 type: GET_NEW_CHART_DATE,
//                 payload: res.data
//             })
//         })
//      }

export const getChartDate = (range, ticker) => dispatch => {
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/${range}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_NEW_CHART_DATE,
                payload: res.data
            })
        })
    }

