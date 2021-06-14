import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return(
    <header>
      <div className='title'>
        <h1>Mixed Drinks About Feelings</h1>
        <img src='./heart.png' alt='heart'/>
      </div>
      <NavLink to='/' className='nav homebtn'>Home</NavLink>
      <NavLink to='/favorites' className='nav favPageBtn'>Favorites</NavLink>
    </header>
  )
}

export default Header;
