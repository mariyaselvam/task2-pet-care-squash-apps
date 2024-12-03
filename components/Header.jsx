import Logo from "../src/assets/home/banner-and-header/logo.png"
import { Link } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/hamburger-menu.png"
// import '../styles/style.css'


import Arrow from "../src/assets/home/about-us/about-us-mini-tit-img.svg"


import HamburgerMenu1 from "../src/assets/home-2/header/close.png"

// import { useState } from 'react';


import {  useLocation } from "react-router-dom"


import React, { useEffect, useState } from 'react';


const Header = () => {

  useEffect(() => {
    const nav = document.getElementById('nav');
    let top = window.scrollY;
    window.addEventListener("scroll", () => {
    
        if(top < window.scrollY){
          nav.classList.add("hide-nav");
        }else{
          nav.classList.remove("hide-nav");
        }
  
      top = window.scrollY;
          
      })
  }, []);


  // nav-menu-active-code

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  

  // hamburger menu toggle 
  const [BtnState, setBtnState] = useState(false);
  function NavToggle(){
  setBtnState(BtnState  => !BtnState);
  }
  let NavBtn = BtnState ? 'nav-view' : '';


  // mobile view sidebarnav home toggle
  const [innerHomeState, setInnerHomeState] = useState(false);
  function ActiveInnerHome(){
    setInnerHomeState(innerHomeState  => !innerHomeState);
  }
  let innerHome = innerHomeState ? 'active-inner-home' : '';

    // mobile view sidebarnav pages toggle
    const [pagesState, setPagesState] = useState(false);
    function ActivePages(){
      setPagesState(pagesState  => !pagesState);
    }
    let innerPages = pagesState ? 'active-Home3NavPages-list' : '';

  return (

    <>
    <header id="nav" >
        <div className="container">
            <div className="row">
                <div className="logo-nav-appointment">
                    <div className="main-logo1">
                        <img src={Logo} alt="" />
                    </div>

                    <ul className="nav-options">
                        <li className="home">
                          <Link className={"Home3-pages-link underline" + (url === "/" ?" active" : "")} to="/">Home
                             <img src={Arrow}  alt="" />
                          </Link>
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
                          <Link className="Home3-pages-link" to="/">Pages
                          <img src={Arrow}  alt="" />
                          </Link>
                          <ul className="Home3NavPages-list">
                           <Link to="/blog-detail"> Blog Listing Page</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">Sitter Details</Link>
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



                    <ul id="home1-mobile-nav " className={ `home1-mobile-nav home1-mobile-nav2 ${NavBtn}`}>
                    <button id="home1-hamburger-menu" className="home1-hamburger-menu home1-hamburger-menu2" 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu1} alt="" />
                    </button>
                      
                    <li className="home">
                      <button onClick={ActiveInnerHome}>
                          <Link className={"underline" + (url === "/" ?" active" : "")} to="/">Home</Link>
                      </button>
                          <ul>
                                <li className={ `inner-home ${innerHome}`}>
                                    <Link to="/home2">Home2</Link>
                                    <Link to="/home3">Home3</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                          <button onClick={ActivePages}>
                          <Link to="/">Pages</Link>
                          </button>
                          <ul className={ `Home3NavPages-list ${innerPages}`} >
                           <Link to="/blog-detail"> Blog Listing Page</Link>
                           <Link to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link to="/sitters">sitters</Link>
                           <Link to="/BlogListingpage">blog details</Link>
                           <Link to="/shop">Shop</Link>
                           <Link to="/cameronwilliamsonpage">Sitter Details</Link>
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