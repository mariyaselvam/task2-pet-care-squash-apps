import Img1 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im1.png"
import Img2 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im2.png"
import Img3 from "../src/assets/home-2/home2-Meet-Our-team/home2-Meet-Our-im3.png"

import Img4 from "../src/assets/home-2/home2-Meet-Our-team/behance.png"
import Img5 from "../src/assets/home-2/home2-Meet-Our-team/dribbble.png"
import Img6 from "../src/assets/home-2/home2-Meet-Our-team/linkedin.png"
import Img7 from "../src/assets/home-2/home2-Meet-Our-team/twitter.png"


const Home2MeetOurTeam = () => {
  return (
    <>
    <section className="home2-Meet-Our-Team-sec">
        <h3 className="home2-Meet-Our-Team-main-tit">
        Meet <b>Our Team</b>
        </h3>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img">
                            <img src={Img1} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Jane Cooper
                       </h4>

                       <span>Manager</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                        <img src={Img6} alt="" />
                        <img src={Img7} alt="" />
                       </div>



                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img">
                            <img src={Img2} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Jane Cooper
                       </h4>

                       <span>Manager</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                        <img src={Img6} alt="" />
                        <img src={Img7} alt="" />
                       </div>



                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="home2-Meet-Our-Team-sec-card">
                        <div className="home2-Meet-Our-Team-sec-card-img">
                            <img src={Img3} alt="" />
                        </div>
                       <h4 className="home2-Meet-Our-Team-name">
                       Jane Cooper
                       </h4>

                       <span>Manager</span>

                       <div className="home2-Meet-Our-Team-card-social-links">
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                        <img src={Img6} alt="" />
                        <img src={Img7} alt="" />
                       </div>



                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home2MeetOurTeam