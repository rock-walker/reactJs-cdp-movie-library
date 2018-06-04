export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_MOVIE = 'REQUEST_MOVIE'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const BUILD_MOVIES_CACHE_KEY = 'BUILD_MOVIES_CACHE_KEY'
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const SWITCH_HEADER_VIEW = 'SWITCH_HEADER_VIEW'
export const SET_FILTER = 'SET_FILTER'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

export const buildMoviesCacheKey = (movieGenre, search) => ({
    type: BUILD_MOVIES_CACHE_KEY,
    movieGenre,
    search
})

export const invalidateMovies = searchBy => ({
    type: INVALIDATE_MOVIES,
    searchBy
})

export const requestPosts = searchBy => ({
    type: REQUEST_POSTS,
    searchBy
})

export const receivePosts = (searchBy, json) => ({
    type: RECEIVE_POSTS,
    searchBy,
    movies: json.data,
    receivedAt: Date.now()
})

export const requestMovie = id => ({
    type: REQUEST_MOVIE,
    id
})

export const receiveMovieDetails = (id, json) => ({
    type: GET_MOVIE_DETAILS,
    id,
    movie: json
})

export const switchHeaderView = isDetails => ({
    type: SWITCH_HEADER_VIEW,
    isDetails
})

export const setSearchFilter = filter => ({
    type: SET_FILTER,
    filter
})

export const setSearchText = text => ({
    type: SET_SEARCH_TEXT,
    text
})

const baseUri = 'http://react-cdp-api.herokuapp.com/movies';

export const fetchMovieDetails = id => dispatch => {
    dispatch(requestMovie(id))
    let url = baseUri + '/' + id
    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receiveMovieDetails(id, json)))
        .then(state => dispatch(fetchPostsIfNeeded('genres', state.movie.genres[0])))
}

const fetchPosts = (key, movieGenre, search) => dispatch => {
    dispatch(requestPosts(key))
    let url = baseUri + '?searchBy=' + movieGenre + (search ? ('&search=' + search) : '');
    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(key, json)))
}

const shouldFetchPosts = (state, key) => {
    const posts = state.moviesBySearch[key]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}

export const sortMovies = (sortByDate) => (dispatch, getState) => {
    let state = getState().appReducers;
    let key = state.moviesCacheKeys;
    let movies = state.moviesBySearch[key];

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
    dispatch(receivePosts(key, wrapper))
}

export const fetchPostsIfNeeded = (movieGenre, search) => (dispatch, getState) => {
    let state = getState().appReducers
    let options = state.searchOptions
    let filter = movieGenre || options.filter
    let query = search || options.searchText

    dispatch(buildMoviesCacheKey(filter, query));

    //update state
    state = getState().appReducers
    let key = state.moviesCacheKeys;
    if (shouldFetchPosts(state, key)) {
        return dispatch(fetchPosts(key, filter, query))
    }
}