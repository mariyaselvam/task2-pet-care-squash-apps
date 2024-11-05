import Img1 from "../src/assets/The-pets-lives-day/the-pets-lives.png"

const Home3Thepetslivesday = () => {
  return (
    <>
    <section className="Home3-The-pets-lives-day-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                   <div className="Home3-The-pets-lives-day-cont-wrap">
                    <span className="Home3-The-pets-lives-day-mini-tit">
                    Why <b>DC Care</b>
                    </span>

                    <h3 className="Home3-The-pets-lives-day-main-tit">
                    The pets lives for the day, the hour, even the movement.
                    </h3>

                    <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</p>
                    
                    <div className="banner-btn-wraper">
                        <a href="#" className="primary-btn">Our Service</a>
                        <a href="#" className="secondary-btn" >About Us</a>
                      </div>

                   </div>
                </div>

                <div className="col-lg-5">
                    <div className="Home3-The-pets-lives-day-main-img">
                        <img src={Img1} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Thepetslivesday