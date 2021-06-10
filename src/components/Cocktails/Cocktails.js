import React from 'react';
import Drink from '../Drink/Drink.js';
import './Cocktails.css';

const Cocktails = ({cocktails}) => {
  const drinkList = cocktails.map(cocktail => {
    return (
      <Drink
        id={cocktail.idDrink}
        key={cocktail.idDrink}
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
