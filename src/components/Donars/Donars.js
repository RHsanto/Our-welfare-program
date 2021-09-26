import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import './Donars.css'
const Donars = (props) => {

  


  const{name,img,age,email,city,country,donate} = props.donar
  const element = <FontAwesomeIcon className='icon' icon={faHandHoldingUsd} />
  return (
    <div>
      <div className="col">
    <div className="card p-3">
      <img src={img}  alt="img"/>
      <div className="card-body ">
       <h3 className="card-title ">{name}</h3>
       <h6> Age    :  {age}</h6>
       <h6> Email  : {email}</h6>
       <h6> City   : {city}</h6>
       <h6> Country : {country}</h6>
       <h6> Donate : ${donate}</h6>
       <button onClick={()=>props.addToCart(props.donar)}  type="button" className="btn btn-warning my-2 "> {element} add to cart</button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Donars;

