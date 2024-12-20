import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"
import Social1 from "../src/assets/home-2/home2-footer/1.svg" 
import Social2 from "../src/assets/home-2/home2-footer/2.svg" 
import Social3 from "../src/assets/home-2/home2-footer/3.svg" 

import { Link } from "react-router-dom"

const Home2Footer = () => {
  return (
    <>
    <section className="home-2-footer-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                 <div className="home-2-footer-logo-and-cont">
                    <div className="home-2-footer-logo">
                        <Link to="/">
                        <img src={FooterLogo} alt="" />
                        </Link>
                    </div>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.</p>
                 </div>
                </div>
                <div className="col-lg-2">
                    <div className="home-2-footer-logo-page-links">
                        <h4 className="home-2-footer-logo-pages-tit">
                        Pages
                        </h4>

                        <ul className="home-2-footer-logo-pages-lu-checks">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Project</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="home-2-footer-logo-Utility-links">
                        <h4 className="home-2-footer-logo-Utility-tit">
                        Utility
                        </h4>

                        <ul className="home-2-footer-logo-Utility-lu-checks">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Our Project</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home-2-footer-logo-Subscribe-links">
                <h4 className="home-2-footer-logo-Subscribe-tit">
                Subscribe
                </h4>

                <input className="home-2-footer-logo-Subscribe-input" type="text"  placeholder='Email here*'/>

               <div className="home2-social-media-f-wrap-nd-subcribe">
               <a href="#" className="home-2-footer-btn">
                Send Now
                </a>

                <div className="home2-social-media-f-wrap">
                    <a href="#"><img src={Social1} alt="" /></a>
                    <a href="#"><img src={Social2} alt="" /></a>
                    <a href="#"><img src={Social3} alt="" /></a>

                </div>
               </div>
                
                </div>
                </div>
            </div>
        </div>

        <div className="copy-rights-nd-terms-nd-conditions">
            <h4>© 2023 Copyrights, All rights reserved. Design by <a href="#">Pixelpro Creation</a></h4>

            <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Home2Footer