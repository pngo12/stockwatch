import {
    RECEIVED_ALL_DATA,
    ADD_TO_WATCHLIST,
    REMOVE_STOCK_FROM_WATCHLIST,
    WRONG_SYMBOL,
    GET_NEW_CHART_DATE,
    IS_LOADING,
    GET_DATA,
} from '../constants'

const initialState = {
    ticker: '',
    quote: {},
    company: {},
    earnings: {},
    news: [],
    peers: [],
    chart: [],
    otherChart: [],
    watchlist: [],
    isLoading: false,
    doneLoading: false,
    error: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return {
                ...state,
                ...action.payload,
                doneLoading: true,
                error: false,
            }
        case IS_LOADING:
            return { ...state, isLoading: true }
        case GET_DATA:
            return { ...state, isLoading: false, chart: action.payload }
        case WRONG_SYMBOL:
            return { ...state, error: true }
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case REMOVE_STOCK_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((item, i) => i !== action.payload)
            }
        case GET_NEW_CHART_DATE:
            return { ...state, otherChart: action.payload }
        default:
            return state
    }
}

export default rootReducer
