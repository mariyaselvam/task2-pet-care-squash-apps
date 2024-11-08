import HeaderLogo from "../src/assets/home-3/header/Logo.png"
import { Link , useLocation } from "react-router-dom"
// import {   } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/w-hamburger-menu.png"
import Arrow from "../src/assets/common/w-down-arrow.png"

import React, { useEffect, useState } from 'react';

const Home3Header = () => {

    
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
    <section className="home3-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="home3-header-wraper">
                    <div className="home3-header-logo">
                    <Link to="/home3">
                    <img src={HeaderLogo} alt="" />
                    </Link>
                        
                    </div>
                    <ul className="home3-header-nav-options">
                        <li className="home">
                            <Link className={"Home3-pages-link underline" + (url === "/home3" ?" active1" : "")} to="/home3">Home
                            <img src={Arrow}  alt="" />
                            </Link>
                            <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home2">Home2</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className={"underline" + (url === "/aboutuspage" ?" active1" : "")} to="/aboutuspage">About</Link>
                        </li>
                        <li>
                            <Link className={"underline" + (url === "/contactus" ?" active1" : "")} to="/contactus">Contact</Link>
                        </li>
                        <li>
                            <Link className={"underline" + (url === "/blog-detail" ?" active1" : "")} to="/blog-detail">Blogs</Link>
                        </li>
                        <li className="Home3-nav-pages">
                            <Link className={"underline Home3-pages-link " + (url === "/adopt-pets-page" ?" active1" : "")} to="/adopt-pets-page">Pages
                            <img src={Arrow}  alt="" />
                            </Link>
                            <ul className="Home3NavPages-list">
                           <Link className={"underline" + (url === "/blog-detail" ?" active1" : "")}  to="/blog-detail"> Blog Listing Page</Link>
                           <Link className={"underline" + (url === "/adopt-pets-page" ?" active1" : "")}  to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link className={"underline" + (url === "/sitters" ?" active1" : "")}  to="/sitters">sitters</Link>
                           <Link className={"underline" + (url === "/BlogListingpage" ?" active1" : "")}  to="/BlogListingpage">blog details</Link>
                           <Link className={"underline" + (url === "/shop" ?" active1" : "")}  to="/shop">Shop</Link>
                           <Link className={"underline" + (url === "/cameronwilliamsonpage" ?" active1" : "")}  to="/cameronwilliamsonpage">cameron williams on page</Link>
                           <Link className={"underline" + (url === "/petsdetailpage" ?" active1" : "")}  to="/petsdetailpage">Pets Detail Page</Link>
                           <Link className={"underline" + (url === "/home3shopdetailspage" ?" active1" : "")}  to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link className={"underline" + (url === "/aboutuspage" ?" active1" : "")}  to="/aboutuspage">About Us Page</Link>
                           <Link className={"underline" + (url === "/contactus" ?" active1" : "")}  to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li>
                            <Link className={"underline" + (url === "/shop" ?" active1" : "")} to="/shop">Shop</Link>
                        </li>
                    </ul>

                    <a href="#" className="home3-header-nav-btn primary-btn">
                    Shop Now
                    </a>

                    <button id="home1-hamburger-menu" className="home1-hamburger-menu" 
                    onClick={NavToggle}>
                      <img src={HamburgerMenu} alt="" />
                    </button>

                    <ul id="home1-mobile-nav" className={ `home1-mobile-nav ${NavBtn}`}>
                    <li className="home">
                    <button onClick={ActiveInnerHome}>
                    <Link className={"underline" + (url === "/home3" ?" active1" : "")} to="/home3">Home</Link>
                      </button>
                          <ul>
                                <li className={ `inner-home ${innerHome}`}>
                                    <Link to="/">Home</Link>
                                    <Link to="/home2">Home2</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link className={"underline" + (url === "/aboutuspage" ?" active1" : "")}  to="/aboutuspage">About</Link></li>
                        <li><Link className={"underline" + (url === "/contactus" ?" active1" : "")} to="/contactus">Contact</Link></li>
                        <li><Link className={"underline" + (url === "/blog-detail" ?" active1" : "")}  to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                        <button onClick={ActivePages}>
                           <Link to=""> Pages </Link>
                          </button>
                          <ul className={ `Home3NavPages-list ${innerPages}`} >
                           <Link className={"underline" + (url === "/blog-detail" ?" active1" : "")}  to="/blog-detail"> Blog Listing Page</Link>
                           <Link className={"underline" + (url === "/adopt-pets-page" ?" active1" : "")}  to="/adopt-pets-page">Adopt Pets Page</Link>
                           <Link className={"underline" + (url === "/sitters" ?" active1" : "")}  to="/sitters">sitters</Link>
                           <Link className={"underline" + (url === "/BlogListingpage" ?" active1" : "")}  to="/BlogListingpage">blog details</Link>
                           <Link className={"underline" + (url === "/shop" ?" active1" : "")}  to="/shop">Shop</Link>
                           <Link className={"underline" + (url === "/cameronwilliamsonpage" ?" active1" : "")}  to="/cameronwilliamsonpage">cameron williams on page</Link>
                           <Link className={"underline" + (url === "/petsdetailpage" ?" active1" : "")}  to="/petsdetailpage">Pets Detail Page</Link>
                           <Link className={"underline" + (url === "/home3shopdetailspage" ?" active1" : "")}  to="/home3shopdetailspage">Shop Details Page</Link>
                           <Link className={"underline" + (url === "/aboutuspage" ?" active1" : "")}  to="/aboutuspage">About Us Page</Link>
                           <Link className={"underline" + (url === "/contactus" ?" active1" : "")}  to="/contactus">Contact</Link>
                         </ul>
                        </li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Home3Header