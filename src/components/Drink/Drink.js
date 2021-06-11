import React from 'react';
import './Drink.css';

const Drink = ({drink}) => {
  return (
    <article className='drink' id={drink.idDrink}>
      <h2>{drink.strDrink}</h2>
      <div className='bev-img'>
        <img src={drink.strDrinkThumb} alt='drink' />
      </div>
    </article>
  )
}

export default Drink;
