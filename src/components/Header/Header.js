import React from 'react';
import logo from '../../images/logo .PNG'
import './Header.css'
const Header = () => {
  return (
    <div>
      {/* header part */}
      <div className="containe w-75 mx-auto shadow m-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container-fluid">

    <div className=" header mx-auto ">
    <img  src={logo} alt="" className='logo me-2'/>
      <a className=" navbar-brand  fw-bolder fs-2 " href="/logo">Welfare Program</a>
      <h3> Social welfare Program For Orphan Children's</h3>
      <h2>Total Budget : <span className='fw-bold'>$200 Million</span></h2>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
};

export default Header;