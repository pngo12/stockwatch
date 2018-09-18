import {RECEIVED_ALL_DATA} from '../constants'

const initialState = {
    quote: {},
    company: {},
    earnings: {},
    financials: {},
    peers: '',
    chart: [10],
    isLoading: false,
    redirect: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_ALL_DATA:
            return { ...state, ...action.payload, redirect: true }
        default:
            return state
    }
}

export default rootReducer
