import HeaderLogo from "../src/assets/home-3/header/Logo.png"
import { Link } from "react-router-dom"
import HamburgerMenu from "../src/assets/common/w-hamburger-menu.png"
import { useState } from "react"

const Home3Header = () => {
      
    const [BtnState, setBtnState] = useState(false);
    function NavToggle(){
    setBtnState(BtnState  => !BtnState);
    }
    let NavBtn = BtnState ? 'nav-view' : '';


  return (
    <>
    <section className="home3-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="home3-header-wraper">
                    <div className="home3-header-logo">
                        <img src={HeaderLogo} alt="" />
                    </div>
                    <ul className="home3-header-nav-options">
                        <li className="home">
                            <Link to="/home3">Home</Link>
                            <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home2">Home2</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/aboutuspage">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact</Link>
                        </li>
                        <li>
                            <Link to="/blog-detail">Blogs</Link>
                        </li>
                        <li className="Home3-nav-pages">
                            <Link to="/adopt-pets-page">Pages
                            </Link>
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
                        <li>
                            <Link to="/shop">Shop</Link>
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
                          <Link to="/home3">Home</Link>
                          <ul>
                                <li className="inner-home">
                                    <Link to="/">Home</Link>
                                    <Link to="/home2">Home2</Link>
                                </li>
                          </ul>
                        </li>
                        <li><Link to="/aboutuspage">About</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/blog-detail">Blogs</Link></li>
                        <li className="Home3-nav-pages">
                          <Link to="">Pages</Link>
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
    </div>
    </section>
    </>
  )
}

export default Home3Header