import axios from 'axios'
import { RECEIVED_ALL_DATA, ADD_TO_WATCHLIST, FLIP_BOOL, REMOVE_STOCK_FROM_WATCHLIST } from '../constants'

export const getData = ticker => dispatch => {
    axios.all([
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/company`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/earnings`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/financials`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/peers`),
        axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/dynamic`)
    ])
        .then(axios.spread((quote, company, earnings, financials, peers, chart) => {
            dispatch({
                type: RECEIVED_ALL_DATA,
                payload: { quote: quote.data, company: company.data, earnings: earnings.data, financials: financials.data, peers: peers.data, chart: chart.data }
            })
        }))
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

export const removeFromWatchlist = ticker => dispatch => {
    dispatch({ type: REMOVE_STOCK_FROM_WATCHLIST, payload: ticker })
}

export const flipBool = () => dispatch => {
    dispatch({ type: FLIP_BOOL, payload: false })
}