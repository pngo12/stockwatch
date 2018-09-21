import { RECEIVED_ALL_DATA, ADD_TO_WATCHLIST, REMOVE_STOCK_FROM_WATCHLIST, WRONG_SYMBOL, GET_NEW_CHART_DATE } from '../constants'

const initialState = {
    ticker: '',
    quote: {},
    company: {},
    earnings: {},
    peers: '',
    initialChart: [],
    otherChart: [],
    watchlist: [],
    isLoading: true,
    redirect: false,
    doneLoading: false,
    error: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return { ...state, 
            ...action.payload, 
            redirect: true, 
            doneLoading: true, 
            error: false, 
            }
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case REMOVE_STOCK_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((item,i) => i !== action.payload)
            }
        case WRONG_SYMBOL:
            return {...state, error: true}
        case GET_NEW_CHART_DATE:
            return {...state, otherChart: action.payload}
        default:
            return state
    }
}

export default rootReducer
