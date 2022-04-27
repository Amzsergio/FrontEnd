import React from 'react';
import s from '../styles/Card.module.css'


export default class Card extends React.Component{

    constructor(props){ // Ever the constructor is needed in order to recive the props, and the super is needed as well. 
      super(props)

      this.maxTemp = this.props.max; // This variable is needed since the PROPS are inmutable data, EVER, so it is impossible to do something like this.props.max++. 

      // this.incraseMaxTempValue = this.incraseMaxTempValue.bind(this); // (1) This line is to bind the this of the reference (1).

      this.state = { // (2) state is the reserved word to access to the internal component state, and this object can be accessed as whatever other object. 
        maxTemp: this.props.max,
        name: "sergio",
        lastName: "Amezquita",
        mostrar: true
      }
    }

    // incraseMaxTempValue(){ // (1)
    //   console.log(this.maxTemp)

    //   this.maxTemp++ // (1) When this function is called, here the 'this' is searched in the global context and that's why it's important to bind it. 

    // }

    incraseMaxTempValue = () => { // Here the arrow function is used, since this one has the implicit bind, and the code wrote in reference (1) is not needed anymore. 
      //this.maxTemp++ // (2) this is not enough, since the change is only in the variable and not in the component state, that's why it's needed a reserved word used in the reference(2) code in the constructor. 

      
      
      this.setState({  // (3) This is reserved word from react to manipulate the state. And this part of code modifies and overlaps the state with the new props and values.
        
        name: this.state.name? null : "sergio", // I can use a ternary condition here. (4)
        maxTemp: this.state.maxTemp + 1
      }, //with this second parameter as a callback, the state is going to be the current. without this parameter, a console.log(this.state. maxTemp) would be the previous value, due to setState is Asyncronous. (5)
      function(){
        // console.log(this.state.maxTemp) // (5)
      }
      )
      console.log(this.state.maxTemp) // (5)
      };

      showLastName = () => {
        this.setState(
          {
            mostrar: !this.state.mostrar
          }
        )
        console.log(this.state.mostrar)
      }

    render(){
			return (
				<div id={s.card}>
					<button className={`${s.btn}`}>x</button> 
          { this.state.mostrar ? (<h6> My lastname is: {this.state.lastName}</h6>) : null }
					<h3 id={s.city} >{this.props.name}</h3>
		
					<div id={s.weather}>
						<div className={s.info}>
						<p> Min </p>
						<p> {this.props.min} </p>
						</div>
					<span>
						<img src={`http://openweathermap.org/img/wn/${this.props.img}@2x.png`} alt="Weather" />
					</span>
						<div className={s.info} >
						<p> Max </p> 
						<p> {this.state.maxTemp}</p> 
            {/* Here it's used the variable assigned with the state of the component (3)*/ }
						</div>
            <div>
              <button onClick={this.incraseMaxTempValue}> ADD VALUE TEMP MIN </button>
              <br />
              <br />
              <button onClick={this.showLastName} > Show last name </button>
            </div>
						<div>
              { 
                this.state.name ? <h6> Mi nombre es: {this.state.name}</h6> : null // (4) keep in mind ternary condition has an implicit return
              }
            </div>
						
				</div>				
			</div>
		)
	}
};