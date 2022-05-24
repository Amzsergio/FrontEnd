import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions/index.js';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {

    console.log(this.props.moviesFavorites)

    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {               
            this.props.moviesFavorites.map((movie)=> {
              return (
              < div key={movie.imdbID} >
                  <Link to={`/movie_detail/${movie.imdbID}`}>
                      <p>
                        name: {movie.Title}
                      </p>
                  </Link>
                <button onClick={() => { this.props.removeMovieFavorite(movie.imdbID)} }> x </button>
              </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    moviesFavorites: state.moviesFavorites
  }
}


export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
