export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    // console.log(id);
    // console.log('here');
    return({type: DELETE_MOVIE, payload:id});
}