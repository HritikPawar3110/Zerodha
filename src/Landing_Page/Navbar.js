import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo.png'

export default function Navbar() {
  return (
    <div className='container'>
    <nav class="navbar navbar-expand-lg border-bottom">
      <div class="container-fluid">
        <div className="col-6">
          <Link class="navbar-brand" to="/">
            <img src={logo} style={{ width:"150px" }}/>
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="col-6 ">
          <div class="collapse navbar-collapse" className="float-right" id="navbarNav">
            <ul class="navbar-nav float-end">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
