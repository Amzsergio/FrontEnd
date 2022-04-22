import React from 'react';
import s from '../styles/Card.module.css'


export default function Card(props) {
  // acá va tu código
  return (
    <div id={s.card}>
      <button className={`${s.btn}`}>x</button> 
      <h3 id={s.city} >{props.name}</h3>

      <div id={s.weather}>
        <div className={s.info}>
        <p> Min </p>
        <p> {props.min} </p>
        </div>
      <span>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Weather" />
      </span>
        <div className={s.info} >
        <p> Max </p> 
        <p> {props.max}</p>
        </div>
      </div>
      
    </div>
  )
};