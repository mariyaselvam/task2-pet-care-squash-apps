import Logo from "../src/assets/home/banner-and-header/logo.png"
import { Link } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/hamburger-menu.png"
// import '../styles/style.css'


// import { useState } from 'react';


import {  useLocation } from "react-router-dom"


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
                    <div className="main-logo1">
                        <img src={Logo} alt="" />
                    </div>

                    <ul className="nav-options">
                        <li className="home">
                          <Link className={"underline" + (url === "/" ?" active" : "")} to="/">Home</Link>
                          <ul>
                                <li className="inner-home">
                                    <Link to="/home2">Home2</Link>
                                    <Link to="/home3">Home3</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link className={"underline" + (url === "/aboutuspage" ?" active" : "")} to="/aboutuspage">About</Link></li>
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
                    Get Appointment
                    </a>
                    
                    <button id="home1-hamburger-menu" className="home1-hamburger-menu" 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu} alt="" />
                    </button>

                    <ul id="home1-mobile-nav" className={ `home1-mobile-nav ${NavBtn}`}>
                    <li className="home">
                          <Link className={"underline" + (url === "/" ?" active" : "")} to="/">Home</Link>
                          <ul>
                                <li className="inner-home">
                                    <Link to="/home2">Home2</Link>
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
                </div>
            </div>
        </div>
    </header>

    

    {/* <header>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </header> */}
    </>
  )

  

}

export default Header