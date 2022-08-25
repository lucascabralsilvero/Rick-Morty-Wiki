import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
import portal from "../../img/portal.png";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg  mb-4 ">
  <div className="container">
  <Link to="/" className="fs-3 ubuntu navbar-brand text-light"> 
  <img className='img' src={portal} alt="" />
  Rick & Morty <span className="green">Wiki</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

      <style jsx>
        {
          `
          button[aria-expanded="false"] > .close{
            display:none;
          }
          .img{
            width:50px;
            heigt:50px;
            margin-right:10px;
          }

          .green{
            color:#8bf62c;
          }

          .navbar{
            border-bottom: 1px solid white;
          }

          button[aria-expanded="true"] > .open{
            display:none;
          `
        }

      </style>

      <i className='fas fa-bars open fw-bold text-dark'></i>
      <i className='fas fa-times close fw-bold text-dark'></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav fs-5">
        <li className="nav-item">
          <NavLink activeClassName="active" to="/" className="nav-link text-secondary"  >Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/episodes" className="nav-link text-secondary" >Episodes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/location" className="nav-link text-secondary" >Location</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar