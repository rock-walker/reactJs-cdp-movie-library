export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_MOVIES = 'SELECT_MOVIES'
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES'

export const selectMovies = movies => ({
    type: SELECT_MOVIES,
    movies
})
export const invalidateMovies = movies => ({
  type: INVALIDATE_MOVIES,
  movies
})

export const requestPosts = movies => ({
    type: REQUEST_POSTS,
    movies
})

export const receivePosts = (movies, json) => ({
    type: RECEIVE_POSTS,
    movies,
    posts: json.data,
    receivedAt: Date.now()
})


const fetchPosts = movies => dispatch => {
    dispatch(requestPosts(movies))
    return fetch(`http://react-cdp-api.herokuapp.com/movies?searchBy=${movies}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(movies, json)))
}

const shouldFetchPosts = (state, movies) => {
    const posts = state.postsBySearch[movies]
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