import axios from 'axios'
import {RECEIVED_ALL_DATA} from '../constants'

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
            payload: {quote: quote.data, company: company.data, earnings: earnings.data, financials: financials.data, peers: peers.data, chart: chart.data}})
    }))
}

