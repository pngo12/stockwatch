import { 
    RECEIVED_ALL_DATA, 
    GET_DATA, 
    WRONG_SYMBOL, 
    IS_LOADING
} from '../constants'

const initialState = {
    ticker: '',
    quote: {},
    company: {},
    earnings: {},
    news: [],
    peers: [],
    chart: [],
    isLoading: false,
    doneLoading: false,
    error: false,
}

const getData = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return {
                ...state,
                ...action.payload,
                doneLoading: true,
                error: false,
            }
        case GET_DATA:
            return { ...state, isLoading: false, chart: action.payload}
        case WRONG_SYMBOL:
            return {...state, error: true}
        case IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}

export default getData;