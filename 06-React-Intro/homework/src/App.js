import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data from './data.js';

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Cards cities={data}/>
//       </div>
//       <hr />
//       <div>
//         <SearchBar
//           onSearch={(ciudad) => alert(ciudad)}
//         />
//       </div>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){    
    super()

    this.state = {
      loading: true
    }
  }



  loading = () => {
    setTimeout(() => {
      this.setState(
        {
          loading: false
        }
      )
    }, 100)
  }

  render(){
    return(
      <>
        {
          this.state.loading ? (<h1> LOADING MY BROH... {this.loading()} </h1> ) : ( /* Here the this.loading is excecuted () since we need to invoke it with the setTimeout. when this.state.loading is changed happens a re-render */

            <div className="App">
                <div>
                  <Cards cities={data}/>
                </div>
                <hr />
                <div>
                  <SearchBar
                    onSearch={(ciudad) => alert(ciudad)}
                  />
                </div>
            </div> 
          )
        }
      </>
    )
  }
}
export default App;
