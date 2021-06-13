import React from 'react';
import PropTypes from 'prop-types';
import './FavDrinks.css';
import Drink from '../Drink/Drink.js';

const FavDrinks = ({favDrinks, favoriteDrink}) => {
  const cocktails = favDrinks.map(cocktail => {
    return (
      <Drink
        key={cocktail.idDrink}
        drink={cocktail}
        favoriteDrink={favoriteDrink}
      />
    )
  })

  return(
    <div className='cocktails'>
      {!cocktails && <p> No Drinks Yet </p>}
      {cocktails}
    </div>
  )
}

export default FavDrinks;

FavDrinks.propTypes = {
  favDrinks: PropTypes.arrayOf(PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string
 })).isRequired,
  favoriteDrink: PropTypes.func.isRequired
};
