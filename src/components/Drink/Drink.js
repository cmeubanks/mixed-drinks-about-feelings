import React from 'react';
import './Drink.css';

const Drink = ({drink}) => {
  return (
    <article className='drink' id={drink.idDrink}>
    {!drink && <p>Select Your Mood</p>}
      <h2>{drink.strDrink}</h2>
      <div className='bev-img'>
        {drink && <img src={drink.strDrinkThumb} alt='drink' />}
      </div>
    </article>
  )
}

export default Drink;
