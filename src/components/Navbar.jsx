import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(208, 205, 205, 0.77)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-5 fs-4" to="/">Ecommerce Shoes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark mx-4 fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark mx-4 fs-5" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark mx-4 fs-5" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark mx-4 fs-5" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item text-dark mx-4 fs-5">
                <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;