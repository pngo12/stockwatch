import {RECEIVED_ALL_DATA, ADD_TO_WATCHLIST, FLIP_BOOL} from '../constants'

const initialState = {
    quote: {},
    company: {},
    earnings: {},
    financials: {},
    peers: '',
    chart: [],
    isLoading: true,
    redirect: false,
    watchList: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return { ...state, ...action.payload, redirect: true, }
        case ADD_TO_WATCHLIST:
            return {...state, 
            watchList: [...state.watchList, action.payload]
            }
        case FLIP_BOOL:
        return {...state, redirect: action.payload}
        default:
            return state
    }
}

export default rootReducer
