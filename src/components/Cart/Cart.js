import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props ;
  
  let total = 0;
  let name = ''
  for(const donar in cart){
    total= total + donar.donate;
    name = donar.name;
  }
  return (
    <div>
  <div class="card cart bg-light ">
  <div class="card-body">
    
<h4>Total Doners : {props.cart.length} </h4>
<h5>Total Amount : ${total}</h5>
<h5>Total Amount : {name}</h5>
  </div>
  
</div>
    </div>
  );
};

export default Cart;