import axios from 'axios'
import * as constant from '../constants'


export const getQuote = ticker => dispatch =>
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`)
    .then(res => {
        dispatch({type: constant.GET_QUOTE, payload: res.data})
    })

export const getCompany = ticker => dispatch =>
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/company`)
    .then(res => {
        dispatch({type: constant.GET_COMPANY, payload: res.data})
    })
    
export const getEarnings = ticker => dispatch =>
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/earnings`)
    .then(res => {
        dispatch({type: constant.GET_EARNINGS, payload: res.data})
    })
export const getPeers = ticker => dispatch =>
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/peers`)
    .then(res => {
        dispatch({type: constant.GET_PEERS, payload: res.data})
    })

export const getChart = ticker => dispatch =>
    axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/chart/1d`)
    .then(res => {
        dispatch({type:constant.GET_CHART, payload: res.data})
    })

// axios.all([
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/quote`),
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/company`),
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/earnings`),
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/financials`),
//     axios.get(`https://api.iextrading.com/1.0/stock/aapl/peers`),
// ])
// .then(axios.spread((quote, company, earnings, financials, peers) => {
//     console.log(quote.data)
//     console.log(company.data)
//     console.log(earnings.data)
//     console.log(financials.data)
//     console.log(peers.data)
// }))