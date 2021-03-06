import React from 'react';
import Card from './Card';
import s from '../styles/Cards.module.css'


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div id={s.container}>

    {props.cities.map((city , index) => {
      return <Card           
      max={city.main.temp_max}
      min={city.main.temp_min}
      name={city.name}
      img={city.weather[0].icon}
      onClose={() => alert(city.name)}
      index = {index}
      
      />
    })
    }
    </div>
  )
};