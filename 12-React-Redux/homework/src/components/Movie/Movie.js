import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index.js';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }

    componentWillUnmount(){
        
    }

    render() {
        console.log(this.props.movieDetail)
        return (
            <div className="movie-detail">
                <h2>{this.props.movieDetail.Title} ({this.props.movieDetail.Year})</h2>
                <h4>{this.props.movieDetail.Actors}</h4>
                <p>{this.props.movieDetail.Plot}</p>
                <img src={this.props.movieDetail.Poster} alt='movie poster'/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        movieDetail: state.movieDetail 
    }
}

export default connect(  mapStateToProps, { getMovieDetail } )(Movie);