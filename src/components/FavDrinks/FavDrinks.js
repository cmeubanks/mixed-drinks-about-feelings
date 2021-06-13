import React from 'react';
import './FavDrinks.css';
import Drink from '../Drink/Drink.js';

const FavDrinks = ({favDrinks, favoriteDrink}) => {
  console.log(favDrinks)
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
