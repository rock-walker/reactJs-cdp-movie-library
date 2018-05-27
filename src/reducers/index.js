import { combineReducers } from 'redux';
import {
    SELECT_MOVIES, INVALIDATE_MOVIES,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedMovies = (state = 'tarantino', action) => {
    switch (action.type) {
        case SELECT_MOVIES:
            return action.movies
        default:
            return state
    }
}

const posts = (state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action) => {
    switch (action.type) {
        case INVALIDATE_MOVIES:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsBySearch = (state = { }, action) => {
    switch (action.type) {
        case INVALIDATE_MOVIES:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.movies]: posts(state[action.movies], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBySearch,
    selectedMovies
})

export default rootReducer