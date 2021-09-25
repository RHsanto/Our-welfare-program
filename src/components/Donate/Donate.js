import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donars from '../Donars/Donars';
import './Donate.css'

const Donate = () => {

  const [donars,setDonars] =useState([]);
  const[cart,setCart] =useState([])

  useEffect(()=> {
    fetch('./donars.json')
    .then(res => res.json())
    .then(data => setDonars(data))
  },[])

const addToCart = (donar)=>{
  const newCart = [...cart,donar];
   setCart(newCart)
}
  return (
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
     <div className="cart-container">
       <Cart cart={cart} ></Cart>
     </div>
    </div>
  );
};

export default Donate;