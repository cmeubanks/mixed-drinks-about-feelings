import React from 'react';
import './Drink.css';

const Drink = ({drink, favoriteDrink}) => {
  return (
    <article className='drink' id={drink.idDrink}>
      <h2>{drink.strDrink}</h2>
      <div className='bev-img'>
        {drink && <img src={drink.strDrinkThumb} alt='drink' />}
      </div>
      <button className='favBtn' onClick={() => favoriteDrink(drink.idDrink)}>Favorite</button>
    </article>
  )
}

export default Drink;
