import Linkedin from "../src/assets/home/footer/linkedin.png"
import Twitter from "../src/assets/home/footer/twitter.png"
import Facebook from "../src/assets/home/footer/facebook.png"
import FooterLogo from "../src/assets/home/footer/footer-Logo.svg"
import footerContact1 from "../src/assets/home/footer/fot1.png"
import footerContact2 from "../src/assets/home/footer/fot2.png"
import footerContact3 from "../src/assets/home/footer/fot3.png"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row ">
                <div className="col-md-12">
                <div className="footer-logo-ng-copy-rights-wrap">
                    <div className="row justify-content-center">
                    <div className="col-sm-12">
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    </div>

                    </div>
                </div>

                <ul className="terms-conditions">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">Get Support</a></li>
                </ul>

                <div className="contact-cont-and-social-media-links">
                <ul className="footer-contact-detail">
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact1} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact2} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div className="footer-contact-img">
                          <img src={footerContact3} alt="" />
                        </div>
                        <div className="footer-contact-cont">
                            <span>Emergency Call</span>
                            <h4 className="footer-contact-name">
                            Esther Howard
                            </h4>
                        </div>
                    </li>
                </ul>

                <div className="social-media-links">
                    <a target="_blank" href="#"><img src={Linkedin} alt="" /></a>
                    <a target="_blank" href="#"><img src={Twitter} alt="" /></a>
                    <a target="_blank" href="#"><img src={Facebook} alt="" /></a>   
                </div>
                </div>
                </div>
                
            </div>
        </div>
        <p className="copy-rights">
                    © 2024 Copyrights, All rights reserved. Design by <b>Pixelpro Creation</b>
        </p>
    </footer>
    
    </>
  )
}

export default Footer