import React, { useState } from 'react';
import Nav from '../src/components/Nav.jsx'
import Cards from './components/Cards.jsx';

import './App.css';

export default function App() {
  
  const [cities, setCities] = useState([]) // This is for Hook, functions. useState returns an array. This is destructured like this [initialState, constant that has the method to modifie the first one] And useState is sent with an empty array that is the initialState. 
  //cities save the cities States, this is what informs react that the state has changed.

  const { REACT_APP_API_KEY } = process.env // this line is to hide info, to run it in local it's important to install a library named 'dotenv'


  function onSearch(city = 'bogota') { // this function will recieve a city // function onSearch(city = 'bogota') would be read as: if it's not any city, the default city is bogota; however here, it's coming Cairs from SearchBar.jsx
    //Here should be exist the call to the Api
    //By now here is set a moked information

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`) //A petition is done with fetch, the defaul action is GET, it is not require any kind of object. the url is named the endpoint. 
        .then((res) => {
          return res.json()
        })    // When a library says "This library is based on promises" means that when any method like fetch is executed, we can captured the info in ".then" 
        // Then, if the info is not in json fomat there is going to be a callback which is gonna capture the response and parser it into a json format. 
        .then((data) => {
          const inputCity = { 
            min: Math.round(data.main.temp_min), // this info comes from search in the object, where is each property. 
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };

          // setCities(oldCities => [...oldCities, inputCity]); // (1) Also this could be: return inputCity, and out of this execution context, capture it: .then((inputCity) => ...)

          const doubledCity = cities.find(city => city.id === inputCity.id)// this is used to evaluate if the city is doubled. 

          doubledCity? alert("This city is already displayed") : setCities(oldCities => [...oldCities, inputCity]);
        })




    // const ciudadEjemplo = { // here there is the mocked city, simulating that has been found a city, this could be taken from any API and create an object with the props that are required in frontend.  
    //   min: 32,
    //   max: 35,
    //   img: "03n",
    //   id: 2172797,
    //   wind: 3.6,
    //   temp: 300.15,
    //   name: "Cairns",
    //   weather: "Clouds",
    //   clouds: 40,
    //   latitud: -16.92,
    //   longitud: 145.77
    // };



    // setCities(oldCities => [...oldCities, ciudadEjemplo]);// keep in mind setCities modifies the city State. Arrow function recieve currentCities if it's not empty, ir it's the first time it will be the empty array "useState([])" and thus it returns implicitly currentCitiesState.concat(ciudadEjemplo).    
    // (1) This was sent to inside of the promise execution context. 
  }

  function onClose(id) {
    setCities(currentCities => currentCities.filter(c => c.id !== id)); // this is the method to modifies the citiesState, this makes a filter to return an array with all the cities that their id's are different to the id that comes from Cards.jsx. 
    // Here the alternative option
    /*
      const filteredCity = cities.filter(city => city.id !== id)
      
      setCities(fiteredCity);
    */
  }

  return (
    <div className="App">
        <Nav onSearch={onSearch}/>
        {/* send the function to be used to the Nav, this is the ONE WAY DATA FLOW App --> Nav --> SearchBar, in searchBar the event is fired and --> Nav --> App */}
        <Cards cities={cities} onClose={onClose}/> 
        {/* Here the cities array is sent, the first time it'll be an empty array */}
    </div>
  );
}
