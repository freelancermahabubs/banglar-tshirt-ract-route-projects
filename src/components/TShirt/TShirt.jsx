import React from 'react';
import './Tshirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
  const {picture, name, price} = tshirt;
  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={()=> handleAddToCart(tshirt)} className='btn-buy-now'>Buy Now</button>
    </div>
  );
};

export default TShirt;