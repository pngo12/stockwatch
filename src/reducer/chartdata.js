import { RECEIVED_ALL_DATA, GET_DATA, WRONG_SYMBOL, GET_NEW_CHART_DATE } from '../constants'

const initialState = {
    ticker: '',
    quote: {},
    company: {},
    earnings: {},
    news: [],
    peers: [],
    isLoading: false,
    doneLoading: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return {
                ...state,
                ...action.payload,
                doneLoading: true,
                error: false,
            }
        case GET_DATA:
            return { ...state, isLoading: false, chart: action.payload }
        case GET_NEW_CHART_DATE:
            return { ...state, otherChart: action.payload }
        case WRONG_SYMBOL:
            return {...state, error: true}
        default:
            return state
    }
}

export default reducer;