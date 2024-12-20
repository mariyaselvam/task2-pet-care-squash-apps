import FooterLogo from "../src/assets/home-3/header/Logo-w.svg"

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

                 <p><b>Email :</b><a href="mailto:info@jstemplate.net"> info@jstemplate.net</a>  </p>
                 <p><b>Phone :</b><a href="tel:880123456789"> 8801234567</a></p>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="home3-footer-quick-links-wrap">
                   <h4 className="home3-footer-quick-links-tit">
                   Quick Link
                   </h4>

                   <ul className="home3-footer-quick-links-checks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Archived</a></li>
                    <li><a href="#">Author</a></li>
                    <li><a href="#">Contact</a></li>
                   </ul>
              </div>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="home3-footer-Category-links-wrap">
                  <h4 className="home3-footer-Category-links-tit">
                  Category
                  </h4>
                  <ul className="home3-footer-Category-links-checks">
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Economy</a></li>
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
                  <a href=""></a>
                  </div>

                  <a href="#"  className="home3-footer-Weekly-Newsletter-btn" >Subscribe</a>
                </div>
              </div>

             <div className="home3-logo-nd-privacy-policy">
               <div className="home3-footer-logo-and-cont-wrap">
                <div className="home3-footer-logo-nd-copy-rights">
                 <p>© 2023 Copyrights, All rights reserved. Design by <a href="#" className="copy-right-company"> Pixelpro Creation</a></p>
                </div></div>

                       <ul className="home3-privacy-policy">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#" >Cookie Policy</a></li>
                       </ul>
             </div>


            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Footer