export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_MOVIE = 'REQUEST_MOVIE'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_MOVIES = 'SELECT_MOVIES'
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const SWITCH_HEADER_VIEW = 'SWITCH_HEADER_VIEW'

export const selectMovies = searchBy => ({
    type: SELECT_MOVIES,
    searchBy
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

export const switchHeaderView = (isDetails) => ({
    type: SWITCH_HEADER_VIEW,
    isDetails
})

const baseUri = 'http://react-cdp-api.herokuapp.com/movies';

export const fetchMovieDetails = id => dispatch => {
    dispatch(requestMovie(id))
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveMovieDetails(id, json)))
}

const fetchPosts = (movieGenre, search) => dispatch => {
    dispatch(requestPosts(movieGenre))
    let url = baseUri + '?searchBy=' + movieGenre + (search ? ('&search=' + search) : '');
    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(movieGenre, json)))
}

const shouldFetchPosts = (state, movies) => {
    const posts = state.moviesBySearch[movies]
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
}


export const fetchPostsIfNeeded = movies => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), movies)) {
        return dispatch(fetchPosts(movies))
    }
}