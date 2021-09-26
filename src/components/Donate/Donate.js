import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donars from '../Donars/Donars';
import './Donate.css'

const Donate = () => {
   // set all donars information
  const [donars,setDonars] =useState([]);
  // set to donar info on cart
  const[cart,setCart] =useState([])

  // here get al donar info
  useEffect(()=> {
    fetch('./donars.json')
    .then(res => res.json())
    .then(data => setDonars(data))
  },[])

  // add eventHandaler
const addToCart = (donar)=>{
  if(!cart.includes(donar))
   setCart([...cart,donar]);
 
}
  return (
    //main div
    <div className='donate-container d-flex'>
      <div className="row row-cols-md-3 g-4">
      {
        donars.map(donar=> <Donars 
          key={donar.key}
          donar={donar}
          addToCart={addToCart}
          ></Donars> )
      }
     </div>
     
     {/* here cart container  */}
     <div className="cart-container">
       <Cart cart={cart}></Cart>
     </div>
    </div>
  );
};

export default Donate;