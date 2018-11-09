import { 
    RECEIVED_ALL_DATA, 
    GET_DATA, 
    WRONG_SYMBOL, 
    IS_LOADING
} from '../Constants'

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

const chartData = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return {
                ...state,
                ...action.payload,
                doneLoading: true,
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

export default chartData;