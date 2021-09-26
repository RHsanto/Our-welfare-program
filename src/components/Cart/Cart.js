import React  from 'react';
import Person from '../Person/Person';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
 
// sum total donar & donate amount
  let total = 0;
  for(const donar of cart){
    total= total + donar.donate;
    
  }


  return (
    <div >
    <div className=" card cart bg-light  ">
    <div className="card-body">
   <h4>Total Donars : {props.cart.length} </h4>
  <div>
  {
    // add person file 
    cart.map(person =><Person
    key={person.key}
    person={person}
    ></Person>
      )
  }

</div>
{/* here total donate amount */}
<h5>Total Amount : ${total}</h5>
</div>

  </div>
</div>
  );
};

export default Cart;