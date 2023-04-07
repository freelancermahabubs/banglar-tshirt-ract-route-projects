import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
  let message;
  if(cart.length === 0){
    message = <p>Please Add some Products</p>
  }
  else{
    message = <div>
      <h3>Broloksxx</h3>
      <p><small>Thanks for giving your money</small></p>
    </div>
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
      <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
      {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>Fokira</span>}
      {message}
      {
        cart.map(tshirt => <p
           key={tshirt._id}
           >{tshirt.name}
            <span><button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></span></p>)
      }
      {
        cart.length === 2 && <p>Double Bonanza !!!</p>
      }
      {
        cart.length === 3 || <h3>Tinta tho hoilona</h3>
      }
    </div>
  );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if or if else to set a variable that will contain an element or components.
 * 2. ternary operator: condition ? 'for true. : "false"
 * 3. Logical &&: (if the condition is true then the next thing will be displayed).
 * 4. Logical || (if the condition is false then the next thing will be display)
 * * */

/**
 * 1. Conditional CSS class.
 * 2.Use ternary operator
 * 3. ternary inside template string
*/