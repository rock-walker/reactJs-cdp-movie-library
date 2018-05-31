import { combineReducers } from 'redux';
import {
    SELECT_MOVIES, INVALIDATE_MOVIES,
    REQUEST_POSTS, RECEIVE_POSTS,
    REQUEST_MOVIE, GET_MOVIE_DETAILS,
    SWITCH_HEADER_VIEW
} from '../actions'

const selectedMovies = (state = 'title', action) => {
    switch (action.type) {
        case SELECT_MOVIES:
            return action.movieGenre + ':' + (action.search || '');
        default:
            return state
    }
}

const movies = (state = {
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
                items: action.movies,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const movieDetails = (state = { }, action) => {
    switch (action.type){
        case REQUEST_MOVIE:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                item: action.movie,
                lastUpdated: action.receivedAt,
                isDetailsView: true,
            }
        case SWITCH_HEADER_VIEW:
            return {
                ...state,
                isDetailsView: action.isDetails
            }
        default:
            return state
    }
}

const moviesBySearch = (state = { }, action) => {
    switch (action.type) {
        case INVALIDATE_MOVIES:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.searchBy]: movies(state[action.searchBy], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    moviesBySearch,
    selectedMovies,
    movieDetails
})

export default rootReducer