import React from 'react';
import './Drink.css';

const Drink = ({id, name, image}) => {
  return (
    <article className='drink' id={id}>
      <h2>{name}</h2>
      <div className='bev-img'>
        <img src={image} alt='drink' />
      </div>
    </article>
  )
}

export default Drink;
