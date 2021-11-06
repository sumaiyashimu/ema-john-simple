import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
      

      const totalPrice= cart.reduce(( total,prd) => total + prd.price, 0 );
      const tax=Math.round (totalPrice/10);

      let shipping= 0;

       if(totalPrice>35){
           shipping=0;
       }
      else if( totalPrice>0){
          shipping=12.99;
      }
      else if(totalPrice> 15){
          shipping= 4.99;
      }
      
      

    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items:{cart.length}</p>
            <p><small>Shipping cost:{shipping} </small></p>
            <p><small>Product Price:{totalPrice}</small></p>
            <p><small>Tax+Vat: {tax}</small></p>
            <p>Total price: {totalPrice+ shipping+tax}</p>
            
        </div>
    );
};

export default Cart;