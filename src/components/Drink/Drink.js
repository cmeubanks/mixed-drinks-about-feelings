import React from 'react';
import PropTypes from 'prop-types'
import './Drink.css';

const Drink = ({drink, favoriteDrink}) => {
  console.log(drink)
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

Drink.propTypes = {
  favoriteDrink: PropTypes.func.isRequired,
  drink: PropTypes.shape({
   idDrink: PropTypes.string,
   strDrink: PropTypes.string,
   strDrinkThumb: PropTypes.string
 }).isRequired
}
