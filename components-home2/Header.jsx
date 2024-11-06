import Logo from "../src/assets/home-2/header/Logo.png"
// import { Link } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/hamburger-menu.png"
// import { useState } from "react"


import { Link , useLocation } from "react-router-dom"
import React, { useEffect, useState } from 'react';

const Header = () => {

    const location = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);
  
    const [BtnState, setBtnState] = useState(false);
    function NavToggle(){
    setBtnState(BtnState  => !BtnState);
    }
    let NavBtn = BtnState ? 'nav-view' : '';

  return (
    <>
     <header>
        <div className="container">
            <div className="row">
                <div className="logo-nav-appointment">
                    <div className="main-logo2">
                        <img src={Logo} alt="" />
                    </div>

                    <ul className="nav-options">
                        <li  className="home">
                            <Link className={"underline" + (url === "/home2" ?" active3" : "")} to="/home2">Home</Link>

                        <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home3">Home3</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                            <Link to="/">Pages</Link>
                        <ul className="Home3NavPages-list">
                           <Link to="/blog-detail"> Blog Listing Page</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">cameron williams on page</Link>
                           <Link to="/petsdetailpage">Pets Detail Page</Link>
                           <Link to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link to="/aboutuspage">About Us Page</Link>
                           <Link to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>

                    <a className="header-btn" href="#">
                    Adopt Now
                    </a>


                    <button id="home1-hamburger-menu" className="home1-hamburger-menu" 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu} alt="" />
                    </button>

                    <ul id="home1-mobile-nav" className={ `home1-mobile-nav ${NavBtn}`}>
                    <li className="home">
                          <Link className={"underline" + (url === "/home2" ?" active3" : "")}  to="/home2">Home</Link>
                          <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home3">Home3</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                          <Link to="/home2">Pages</Link>
                          <ul className="Home3NavPages-list">
                           <Link to="/blog-detail"> Blog Listing Page</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">cameron williams on page</Link>
                           <Link to="/petsdetailpage">Pets Detail Page</Link>
                           <Link to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link to="/aboutuspage">About Us Page</Link>
                           <Link to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header