import React from 'react';
import './FavDrinks.css';

const FavDrinks = ({favDrinks}) => {
  const cocktails = favDrinks.map(cocktail => {
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
    <div className='drinks-container'>
      {cocktails}
    </div>
  )
}
}
