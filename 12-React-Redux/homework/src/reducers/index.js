const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites
        }
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    return state;
  }
  
export default rootReducer;