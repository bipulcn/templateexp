import { Outlet, Link } from "react-router-dom";
import React from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = (props) => {
  return (
    <div class="fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/button">Buttons</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/card">card</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/form">form</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/text">Text</Link>
                    </li>
                    <li>
                      <div className="text-center" style={{width: "150px"}}><div onClick={props.method} className="btn btns1">{props.value==='dark'? <FaSun /> : <FaMoon /> }</div></div>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
