import {IS_LOADING} from '../Constants'

const initialState = {
    isLoading: false,
    doneLoading: false,
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}

export default loading 