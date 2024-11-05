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
                    <div className="col-sm-5">
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="" />
                    </div>
                    </div>

                    <div className="col-sm-4">

                    <h4 className="copy-rights">
                    © 2023 Copyrights, All rights reserved. Design by <b>Passion Themes</b>
                    </h4>
                    </div>
                    </div>
                </div>

                <ul className="terms-conditions">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                  <li>Get Support</li>
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
                    <a target="_blank" href="https://www.linkedin.com"><img src={Linkedin} alt="" /></a>
                    <a target="_blank" href="https://x.com/"><img src={Twitter} alt="" /></a>
                    <a target="_blank" href="https://www.facebook.com/"><img src={Facebook} alt="" /></a>
                    
                    
                </div>
                </div>
                </div>
                
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer