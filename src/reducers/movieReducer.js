import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            // console.log(state.movies);
            // console.log(action.payload);
            // const updatedMovies = state.movies.filter(item=>(item.id != action.payload))
            // console.log(updatedMovies)
            return {
                ...state,
                // movies: state.movies.filter(item=>(action.payload !== item.id))
                movies: state.movies.filter(function(item) {
                    return item.id != action.payload
                })
            }
        default:
            return state;
    }
}

export default reducer;