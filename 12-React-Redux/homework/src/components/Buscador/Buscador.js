import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from '../../actions/index.js';
import './Buscador.css';

// FUNCTION COMPONENT

function Buscador(props){
  
      return (
        <div>
          <h2>Buscador</h2>
          <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label className="label" htmlFor="title">Película: </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button type="submit" onClick={()=> this.props.obtenerPelis(title)}>BUSCAR</button> {/*  Tambien sería this.state.title (1) */}
          </form>
          <ul>
          {
            this.props.state.moviesLoaded.map((movie)=> {
              const objetoPeli = {
                Title: movie.Title,
                imdbID: movie.imdbID
              }

              return(
                < div key={movie.imdbID} >
                  <Link to={`/movie_detail/${movie.imdbID}`}>
                      <p>
                        name: {movie.Title}
                      </p>
                  </Link>

                    <button onClick={() => this.props.agregarAFav(objetoPeli)}> ♥ </button>
                </div>
              )
            })

          }{/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          </ul>
        </div>
       )
}




// CLASS COMPONENT

// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//   }

//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   render() {
    
//     const { title } = this.state; // (1)
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit" onClick={()=> this.props.obtenerPelis(title)}>BUSCAR</button> {/*  Tambien sería this.state.title (1) */}
//         </form>
//         <ul>
//          {
//            this.props.state.moviesLoaded.map((movie)=> {
//             const objetoPeli = {
//               Title: movie.Title,
//               imdbID: movie.imdbID
//             }

//              return(
//                < div key={movie.imdbID} >
//                  <Link to={`/movie_detail/${movie.imdbID}`}>
//                     <p>
//                       name: {movie.Title}
//                     </p>
//                  </Link>

//                   <button onClick={() => this.props.agregarAFav(objetoPeli)}> ♥ </button>
//                </div>
//              )
//            })

//          }{/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//         </ul>
//       </div>
//     );
//   }
// }


// function mapStateToProps(state){
//   return{
//     state: state
//   }
// }

// // En caso que no destructure : " export default connect(null, mapDispatchToProps)(Buscador); " debo escribir la siguiente funcion: 

// function mapDispatchToProps(dispatch){
//   return {
//     obtenerPelis: (titulo) => dispatch(getMovies(titulo)),
//     agregarAFav: (objetoPeli) => dispatch(addMovieFavorite(objetoPeli))
//   }
// } // La alternativa es enviar desustructurado export default connect(null, { getMovies })(Buscador)

// export default connect( mapStateToProps , mapDispatchToProps )(Buscador);
