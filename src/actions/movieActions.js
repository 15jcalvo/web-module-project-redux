export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    // console.log(id);
    // console.log('here');
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (movie) => {
    // console.log('action')
    return({type: ADD_MOVIE, payload:movie})
}