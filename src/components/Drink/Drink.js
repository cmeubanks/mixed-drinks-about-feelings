import React from 'react';
import PropTypes from 'prop-types';
import './Drink.css';

const Drink = ({drink, favoriteDrink, favDrinks}) => {
  const styleFavorite = () => {
    if (favDrinks) {
      const faved = favDrinks.filter(fave => fave.idDrink === drink.idDrink)
      if (faved.length > 0) {
        return 'favBtn faved'
      }
    }
    return 'favBtn'
  }

  return (
    <article className='drink' id={drink.idDrink}>
      <div>
        <h2>{drink.strDrink}</h2>
      </div>
      <div className='bev-img'>
        {drink && <img className='drink-img' src={drink.strDrinkThumb} alt='drink' />}
      </div>
      <button className={styleFavorite()} onClick={() => favoriteDrink(drink.idDrink)}>Favorite</button>
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
