import FooterLogo from "../src/assets/home-3/footer/home3-footer-logo.svg"

const Home3Footer = () => {
  return (
    <>
    <section className="Home3-footer-sec">
        <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home3-footer-abt-cont">
                 <h4 className="home3-footer-abt-cont-tit">
                 About
                 </h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                 <p><b>Email :</b>  info@jstemplate.net</p>
                 <p><b>Phone :</b>   880 123 456 789</p>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="home3-footer-quick-links-wrap">
                   <h4 className="home3-footer-quick-links-tit">
                   Quick Link
                   </h4>

                   <ul className="home3-footer-quick-links-checks">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Archived</li>
                    <li>Author</li>
                    <li>Contact</li>
                   </ul>
              </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="home3-footer-Category-links-wrap">
                  <h4 className="home3-footer-Category-links-tit">
                  Category
                  </h4>
                  <ul className="home3-footer-Category-links-checks">
                    <li>Lifestyle</li>
                    <li>Technology</li>
                    <li>Travel</li>
                    <li>Business</li>
                    <li>Economy</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="home3-footer-Weekly-Newsletter-wrap">
                  <h4 className="home3-footer-Weekly-Newsletter-tit">
                  Weekly Newsletter
                  </h4>
                  <p>Get blog articles and offers via email</p>

                  <div className="home3-footer-Weekly-Newsletter-input-wrap">
                  <input className="home3-footer-Weekly-Newsletter-input" placeholder="Your Email" type="text"  />
                  </div>

                  <a href="#"  className="home3-footer-Weekly-Newsletter-btn" >Subscribe</a>
                </div>
              </div>

             <div className="home3-logo-nd-privacy-policy">
               <div className="home3-footer-logo-and-cont-wrap">
                <div className="home3-footer-logo">
                <img src={FooterLogo} alt="" />
               </div>
                <div className="home3-footer-logo-nd-copy-rights">
                 <h4><b className="t-yellow">D</b> <b className="t-orange">C</b> Cares</h4>
                 <p>© 2023 Copyrights, All rights reserved. Design by DC cares</p>
                </div></div>

                       <ul className="home3-privacy-policy">
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                       </ul>
             </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Footer