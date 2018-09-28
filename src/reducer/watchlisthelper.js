import { ADD_TO_WATCHLIST, REMOVE_STOCK_FROM_WATCHLIST } from '../constants'

const initialState = {
    watchlist: [],
}

const watchlist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            }
        case REMOVE_STOCK_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter((item, i) => i !== action.payload)
            }
        default:
            return state
    }
}

export default watchlist