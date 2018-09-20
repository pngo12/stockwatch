import { RECEIVED_ALL_DATA, ADD_TO_WATCHLIST, FLIP_BOOL } from '../constants'

const initialState = {
    quote: {},
    company: {},
    earnings: {},
    financials: {},
    peers: '',
    chart: [],
    isLoading: true,
    redirect: false,
    watchlist: [],
    doneLoading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return { ...state, ...action.payload, redirect: true, doneLoading: true }
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            }
        case FLIP_BOOL:
            return { ...state, redirect: action.payload }
        default:
            return state
    }
}

export default rootReducer
