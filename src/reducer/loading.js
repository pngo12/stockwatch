import {IS_LOADING} from '../constants'

const initialState = {
    isLoading: false,
    doneLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}

export default reducer 