
const API_KEY = '6d022ee2'

export function addMovieFavorite(payload) {
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload: ''
    };
  }

export function removeMovieFavorite(){
    return {
        type:"REMOVE_MOVIE_FAVORITE",
        payload: ''
    }
}

export function getMovies(titulo) {
      return function(dispatch) {
          return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
          .then(response  => response.json())
          .then(json => {
              dispatch(  //getMovies(json) puede ser invocada si creo la funcion (1), y seria lo mismo. 
              {
                  type: "GET_MOVIES",
                  payload: json
                  
                }            
                );
            });
        };
    }

export function getMovieDetail(){
    return {
        type: 'GET_MOVIE_DETAIL',
        payload: ''
    }
}



    // function getMovies(moviesData){ // (1)
    //     return {
    //         type: "GET_MOVIES",
    //         payload: moviesData
    //     }
    // }