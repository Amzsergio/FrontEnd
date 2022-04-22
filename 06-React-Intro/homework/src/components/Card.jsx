import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <h3>{props.name}</h3>
      <button>X</button>
      <div>
        <div><span>Min</span> {props.min}</div>
        <div><span>Max</span>{props.max}</div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Sun" />
      </div>
    </div>
  )
};