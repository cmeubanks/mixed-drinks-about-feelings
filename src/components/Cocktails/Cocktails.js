import React from 'react';
import './Cocktails.css';

const Cocktails = ({drinks}) => {
  const drinkList = drinks.map(drink => {
    return (
      <Drink
        id={drink.id}
        key={drink.id}
        name={drink.strDrink}
        image={drink.strDrinkThumb}
      />
    )
  })

  return(
    <div className='cocktails-container'>
      {drinkList}
    </div>
  )
}
