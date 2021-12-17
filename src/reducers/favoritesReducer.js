import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            console.log('reducer')
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        default:
            return state;
    }
}

export default reducer;