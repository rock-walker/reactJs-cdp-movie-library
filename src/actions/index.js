import { call, put, all, takeLatest, select } from 'redux-saga/effects'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_MOVIE = 'REQUEST_MOVIE'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const BUILD_MOVIES_CACHE_KEY = 'BUILD_MOVIES_CACHE_KEY'
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const SWITCH_HEADER_VIEW = 'SWITCH_HEADER_VIEW'
export const SET_FILTER = 'SET_FILTER'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

export function buildMoviesCacheKey(movieGenre, search) {
    return {
        type: BUILD_MOVIES_CACHE_KEY,
        movieGenre,
        search
    }
}

export function invalidateMovies(searchBy) {
    return {
        type: INVALIDATE_MOVIES,
        searchBy
    }
}

export function requestPosts(searchBy) {
    return {
        type: REQUEST_POSTS,
        searchBy
    }
}

export function receivePosts(searchBy, json) {
    return {
        type: RECEIVE_POSTS,
        searchBy,
        movies: json.data
    }
}

export function requestMovie(id) {
    return {
        type: REQUEST_MOVIE,
        id
    }
}

export function receiveMovieDetails(id, json) {
    return {
        type: GET_MOVIE_DETAILS,
        id,
        movie: json
    }
}

export function switchHeaderView(isDetails) {
    return {
        type: SWITCH_HEADER_VIEW,
        isDetails
    }
}

export function setSearchFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}

export function setSearchText(text) {
    return {
        type: SET_SEARCH_TEXT,
        text
    }
}

const baseUri = 'http://react-cdp-api.herokuapp.com/movies';

export function* fetchMovieDetails (id) {
    const movie = yield call(requestMovie, id)
    let url = baseUri + '/' + id
    const response = yield call(fetch, url)
    const moviesData = response.json()
    const movieDetails = yield call(receiveMovieDetails, id, json)

    yield call(fetchPostsIfNeeded, 'genres', state.movie.genres[0])
}

export function* watchFetchMovieDetails() {
    yield takeLatest(GET_MOVIE_DETAILS, fetchMovieDetails)
}

export function* fetchPosts (key, movieGenre, search) {
    yield put(requestPosts(key))
    let url = baseUri + '?searchBy=' + movieGenre + (search ? ('&search=' + search) : '');
    const response = yield call(fetch, url)
    const data = yield response.json()
    yield put(receivePosts(key, data))
}

export function shouldFetchPosts (state, key) {
    const posts = state.moviesBySearch[key]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export function* sortMovies (sortByDate) {
    let state = yield select()
    let key = state.appReducers.moviesCacheKeys
    let movies = state.appReducers.moviesBySearch[key];

    if (movies == undefined || movies.items.length == 0){
        return
    }

    if (sortByDate) {
        movies.items.sort((a, b) => a.release_date < b.release_date);
    }
    else {
        movies.items.sort((a, b) => a.vote_average < b.vote_average);
    }

    let wrapper = {}
    wrapper.data = movies.items
    yield put(receivePosts(key, wrapper))
}

export function* watchSortMovies() {
    yield takeLatest('SORT_MOVIES', sortMovies)
}

export function* fetchPostsIfNeeded (movieGenre, search) {
    let state = yield select()
    let options = state.appReducers.searchOptions
    let filter = movieGenre || options.filter
    let query = search || options.searchText

    yield put(buildMoviesCacheKey(filter, query))

    //update state
    state = yield select()
    let key = state.appReducers.moviesCacheKeys

    if (shouldFetchPosts(state.appReducers, key)) {
        yield call(fetchPosts, key, filter, query)
    }
}

export function* moviesSaga() {
    yield all([
        watchFetchMovieDetails(),
        fetchPostsIfNeeded(),
        watchSortMovies()
    ])
}