
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="h-left col">
                            <a href="#">
                                <img src="assets/images/logo.png" alt="main-logo" />
                            </a>
                        </div>
                        <ul className="h-middle col-sm-8">
                            <li>
                                <a href="http://localhost:3001/Home">Home</a>
                            </li>
                            <li>
                                <a href="#feture">Fetures</a>
                            </li>
                            <li>
                                <a href="#collection">Collection</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                        </ul>
                        <div className="h-right col-sm-1">
                        <Link to="/login">
                            <i class="fa-solid fa-user"></i>
                            </Link>
                            <Link to="/order-list">
                                <i className="fa-solid fa-receipt"></i>
                            </Link>
                            <Link to="/cart" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
