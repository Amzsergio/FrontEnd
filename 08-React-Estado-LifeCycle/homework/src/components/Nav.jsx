import React from 'react';
import Logo from '../assets/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) { // recieve a function to be used from App.js
  return (
    <nav className='nav'>
        <img src={Logo} alt="Logo de Henry" id='logoHenry'/>
        <span className='textoHenry'> Henry - Weather App</span>
        <SearchBar onSearch={onSearch}/> 
        {/* Send the fuction recieved to SearchBar */}
    </nav>
  );
};

export default Nav;
