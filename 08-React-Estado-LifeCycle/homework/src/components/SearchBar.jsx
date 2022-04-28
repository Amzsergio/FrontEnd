import React, { useState } from "react";

export default function SearchBar({onSearch}) { // This recive a function to be used from Nav.jsx

  const [input, setInput] = useState('') //(2.3)

  function infoSent(e){ //  I need to send the event to the onSubmit form, how to do that? (1)
    e.preventDefault(); // As the default form's behavior is to reload the website, this line avoids this issue, since I don't want to lose what has been done in the rest of the website.
    if (!input){
       alert("You need to type a city name")
      }else{
        onSearch(input); // (2.4)
        setInput('')// this is to indicate new state as empty, but it's important to indicate to the input has the current value of input (3)
      } 
  }

  const onInputChange = (e) => {// this is not a method from js but for a html event, that's why it starts with on. 
      setInput(e.target.value)// Thats how the value is accessed.  (2.2)
  }

  return (
    <form onSubmit={(e) => infoSent(e)}> {/* (1) it is not possible: infoSent(e), since i don want to execute it, I need to send the function with the even, that's why it's used the callback as an arrow function */}
      <input
        value={input} // (3) this is required to get empty the input      
        onChange={(e) => onInputChange(e)} // this is required the function with the event, that's why this is a callback.  (2.1)
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
