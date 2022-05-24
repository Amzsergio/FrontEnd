
const API_KEY = '6d022ee2'

export function addMovieFavorite(infoPeli) {
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload: infoPeli
    };
  }

export function removeMovieFavorite(id){
    return {
        type:"REMOVE_MOVIE_FAVORITE",
        payload: id
    }
}

export function getMovies(titulo) {
      return function(dispatch) {
          return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
          .then(response  => response.json())
          .then(json => {
              return dispatch(  //getMovies(json) puede ser invocada si creo la funcion (1), y seria lo mismo. 
              {
                  type: "GET_MOVIES",
                  payload: json.Search
                  
                }            
                );
            });
        };
    }

export function getMovieDetail(id){
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response  => response.json())
        .then(json => {
            return dispatch(
            {
                type: "GET_MOVIE_DETAIL",
                payload: json
                
              }            
              );
          });
      };
}



    // function getMovies(moviesData){ // (1)
    //     return {
    //         type: "GET_MOVIES",
    //         payload: moviesData
    //     }
    // }