import * as constant from '../constants'

const initialState = {
    quote: {},
    company: {},
    earnings: {},
    financials: {},
    peers: '',
    chart: [],
    isLoading: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case constant.GET_QUOTE:
        return {...state, quote:action.payload }
        case constant.GET_COMPANY:
        return {...state, company:action.payload}
        case constant.GET_CHART:
        return {...state, chart:action.payload}
        default:
        return state
    }
}

export default rootReducer
