import axios from 'axios';
import {
    RECEIVED_ALL_DATA,
    WRONG_SYMBOL,
    IS_LOADING,
    GET_DATA
} from '../Constants';

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
        console.log("FIRST ONE :", getAllData[0].data, "\nSECOND ONE: ", getAllData[1].data)

        dispatch({
            type: RECEIVED_ALL_DATA,
            payload: {
                quote: getAllData[0].data,
                company: getAllData[1].data,
                earnings: getAllData[2].data,
                peers: getAllData[3].data,
                chart: getAllData[4].data,
                ticker: getAllData[5].data,
                news: getAllData[6].data,
            }
        })
    }

    catch (error) {
        dispatch({ type: WRONG_SYMBOL, payload: error.response })
    }
    //     axios.all([
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/quote`),
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/company`),
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/earnings`),
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/peers`),
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/chart/1d`),
    //         axios.get(process.env.REACT_APP_API + `/${ticker}/news`),
    //     ])
    //         .then(axios.spread((quote, company, earnings, peers, chart, news) => {
    //             dispatch({
    //                 type: RECEIVED_ALL_DATA,
    //                 payload: {
    //                     quote: quote.data,
    //                     company: company.data,
    //                     earnings: earnings.data,
    //                     peers: peers.data,
    //                     chart: chart.data,
    //                     ticker: quote.data.symbol,
    //                     news: news.data,
    //                 }
    //             })
    //         }))
    //         .catch(err => {
    //             dispatch({ type: WRONG_SYMBOL, payload: err.response });
    //         })
    // }

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

