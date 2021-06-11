import React from 'react';
import Drink from '../Drink/Drink.js';
import './Cocktails.css';

const Cocktails = ({drink}) => {

  return(
    <div className='cocktails-container'>
      <Drink drink={drink} />
    </div>
  )
}

export default Cocktails;
