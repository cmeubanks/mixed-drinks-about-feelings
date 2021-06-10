import React from 'react';
import './Drink.css';

const Drink = ({id, name, image}) => {
  return (
    <div className='drink' id={id}>
      <h2>{name}</h2>
      <img src={image} alt='drink image' />
    </div>
  )
}

export default Drink;
