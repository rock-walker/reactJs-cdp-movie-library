// @flow

import {
  call, put, all, takeLatest, select, Saga
} from 'redux-saga/effects';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const BUILD_MOVIES_CACHE_KEY = 'BUILD_MOVIES_CACHE_KEY';
export const INVALIDATE_MOVIES = 'INVALIDATE_MOVIES';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const SWITCH_HEADER_VIEW = 'SWITCH_HEADER_VIEW';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export function buildMoviesCacheKey(movieGenre: string, search: string): Object {
  return {
    type: BUILD_MOVIES_CACHE_KEY,
    movieGenre,
    search,
  };
}

export function invalidateMovies(searchBy: string): Object {
  return {
    type: INVALIDATE_MOVIES,
    searchBy,
  };
}

export function requestPosts(searchBy: string) {
  return {
    type: REQUEST_POSTS,
    searchBy,
  };
}

export function receivePosts(searchBy:string, json: Object) {
  return {
    type: RECEIVE_POSTS,
    searchBy,
    movies: json.data,
  };
}

export function requestMovie(id: string) {
  return {
    type: REQUEST_MOVIE,
    id,
  };
}

export function receiveMovieDetails(id: string, json: Object) {
  return {
    type: GET_MOVIE_DETAILS,
    id,
    movie: json,
  };
}

export function switchHeaderView(isDetails: boolean) {
  return {
    type: SWITCH_HEADER_VIEW,
    isDetails,
  };
}

export function setSearchFilter(filter: string) {
  return {
    type: SET_FILTER,
    filter,
  };
}

export function setSearchText(text: string) {
  return {
    type: SET_SEARCH_TEXT,
    text,
  };
}

const baseUri = 'http://react-cdp-api.herokuapp.com/movies';

export function* fetchMovieDetails(id: string) : Saga<void> {
  const movie = yield call(requestMovie, id);
  const url = `${baseUri}/${id}`;
  const response = yield call(fetch, url);
  const moviesData = response.json();
  const movieDetails = yield call(receiveMovieDetails, id, moviesData);

  yield call(fetchPostsIfNeeded, 'genres', movie.genres[0]);
}

export function* watchFetchMovieDetails() : Saga<void> {
  yield takeLatest(GET_MOVIE_DETAILS, fetchMovieDetails);
}

export function* fetchPosts(key: string, movieGenre: string, search: string) : Saga<void> {
  yield put(requestPosts(key));
  const url = `${baseUri}?searchBy=${movieGenre}${search ? (`&search=${search}`) : ''}`;
  const response = yield call(fetch, url);
  const data = yield response.json();
  yield put(receivePosts(key, data));
}

export function shouldFetchPosts(state: Object, key: string) : boolean {
  const posts = state.moviesBySearch[key];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
}

export function* sortMovies(sortByDate: boolean) : Saga<void> {
  const state = yield select();
  const key = state.appReducers.moviesCacheKeys;
  const movies = state.appReducers.moviesBySearch[key];

  if (movies === undefined || movies.items.length === 0) {
    return;
  }

  if (sortByDate) {
    movies.items.sort((a, b) => a.release_date < b.release_date);
  } else {
    movies.items.sort((a, b) => a.vote_average < b.vote_average);
  }

  const wrapper = {};
  wrapper.data = movies.items;
  yield put(receivePosts(key, wrapper));
}

export function* watchSortMovies() : Saga<void> {
  yield takeLatest('SORT_MOVIES', sortMovies);
}

export function* fetchPostsIfNeeded(movieGenre: ?string, search: ?string) : Saga<void> {
  let state = yield select();
  const options = state.appReducers.searchOptions;
  const filter = movieGenre || options.filter;
  const query = search || options.searchText;

  yield put(buildMoviesCacheKey(filter, query));

  // update state
  state = yield select();
  const key = state.appReducers.moviesCacheKeys;

  if (shouldFetchPosts(state.appReducers, key)) {
    yield call(fetchPosts, key, filter, query);
  }
}

export function* moviesSaga() : Saga<Object> {
  yield all([
    watchFetchMovieDetails(),
    fetchPostsIfNeeded(),
    watchSortMovies(),
  ]);
}
