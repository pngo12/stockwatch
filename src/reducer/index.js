import {
    RECEIVED_ALL_DATA,
    ADD_TO_WATCHLIST,
    REMOVE_STOCK_FROM_WATCHLIST,
    WRONG_SYMBOL,
    GET_NEW_CHART_DATE,
    IS_LOADING,
    GET_DATA,
    FLIP_CLICKED
} from '../constants'
import {combineReducers} from 'redux'
import loading from './loading'
import getData from './chartdata'
import watchlist from './watchlisthelper'



// const initialState = {
//     ticker: '',
//     quote: {},
//     company: {},
//     earnings: {},
//     news: [],
//     peers: [],
//     chart: [],
//     otherChart: [],
//     watchlist: [],
//     isLoading: false,
//     doneLoading: false,
//     error: false,
//     clicked: false
// }
// const initialState = {
//     ticker: '',
//     quote: {},
//     company: {},
//     earnings: {},
//     news: [],
//     peers: [],
//     chart: [],
//     otherChart: [],
//     watchlist: [],
//     isLoading: false,
//     doneLoading: false,
//     error: false,
//     clicked: false
// }

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case RECEIVED_ALL_DATA:
//             return {
//                 ...state,
//                 ...action.payload,
//                 doneLoading: true,
//                 error: false,
//                 clicked: false
//             }
//         case IS_LOADING:
//             return { ...state, isLoading: true }
//         case GET_DATA:
//             return { ...state, isLoading: false, chart: action.payload }
//        case WRONG_SYMBOL:
//             return { ...state, error: true }
//        case ADD_TO_WATCHLIST:
//             return {
//                 ...state,
//                 watchlist: [...state.watchlist, action.payload],
//             }
//        case REMOVE_STOCK_FROM_WATCHLIST:
//             return {
//                 ...state,
//                 watchlist: state.watchlist.filter((item, i) => i !== action.payload)
//             }
//         case GET_NEW_CHART_DATE:
//             return { ...state, otherChart: action.payload }
//         case FLIP_CLICKED:
//             return {...state, clicked: true}
//         default:
//             return state
//     }
// }

// const receiveData = (state = initialState, action) => {
//     switch(action.type){
//         case RECEIVED_ALL_DATA:
//             return {
//                 ...state,
//                 ...action.payload,
//                 doneLoading: true,
//                 error: false,
//                 clicked: false
//             }
//             case GET_DATA:
//                 return { ...state, isLoading: false, chart: action.payload }
//             case GET_NEW_CHART_DATE:
//                 return { ...state, otherChart: action.payload}
//             default:
//                 return state
//     }
// }

// const watchlistHelper = (state = initialState, action) => {
//     switch(action.type){
//         case ADD_TO_WATCHLIST:
//             return {
//                 ...state,
//                 watchlist: [...state.watchlist, action.payload],
//             }
//         case REMOVE_STOCK_FROM_WATCHLIST:
//             return {
//                 ...state,
//                 watchlist: state.watchlist.filter((item, i) => i !== action.payload)
//             }
//         default:
//             return state
//     }
// }

// const loadingGifHelper = (state = initialState, action) => {
//     switch(action.type) {
//         case IS_LOADING:
//             return { ...state, isLoading: true }
//         default:
//         return state
//     }
// }



// const rootReducer = combineReducers({
    // receiveData,
    // validateData,
    // watchlistHelper,
    // loadingGifHelper
// })



export default combineReducers({
    watchlist,
    getData,
    loading
})
