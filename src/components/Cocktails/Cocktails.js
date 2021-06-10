import React from 'react';
import Drink from '../Drink/Drink.js';

const Cocktails = ({cocktails}) => {
  const drinkList = cocktails.map(cocktail => {
    return (
      <Drink
        id={cocktail.id}
        key={cocktail.id}
        name={cocktail.strDrink}
        image={cocktail.strDrinkThumb}
      />
    )
  })

  return(
    <div className='cocktails-container'>
      {drinkList}
    </div>
  )
}

export default Cocktails;
