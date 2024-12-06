import Img1 from "../src/assets/home-3/Home3BlogSec/Blog-img-1.png"
import Img2 from "../src/assets/home-3/Home3BlogSec/Blog-img-2.png"
import Img3 from "../src/assets/home-3/Home3BlogSec/Blog-img-3.png"


import Author1 from "../src/assets/home-3/Home3BlogSec/pro-1.png"
import Author2 from "../src/assets/home-3/Home3BlogSec/pro-2.png"
import Author3 from "../src/assets/home-3/Home3BlogSec/pro-3.png"


const Home3BlogsSec = () => {
  return (
    <>
     <section className="home3-Our-Blogs-sec">
     <div className="home3-Testimonial-tit-wraper">
            {/* <span className="home3-Testimonial-mini-tit">Our <b>Service</b></span> */}
            <h3 className="home3-Testimonial-mini-tit home3-Testimonial-main-tit-blog">Our  <b> Blogs</b></h3>
    </div>
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-xl-4 col-lg-6">
                    <a href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                            <img src={Img1} alt="" />
                        </div>
                        <span className="home-3-blog-mini-tit">Breeding</span>

                        <h4 className="home-3-blog-main-tit">
                        Top 10 dog breeds that live the longest
                        </h4>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <img src={Author1} alt="" />
                                <h4>Tracey Wilson</h4>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </a>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <a href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                            <img src={Img2} alt="" />
                        </div>
                        <span className="home-3-blog-mini-tit">Breeding</span>

                        <h4 className="home-3-blog-main-tit">
                        Personalized sitting for all pets.
                        </h4>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <img src={Author2} alt="" />
                                <h4>Courtney Davis</h4>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </a>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <a href="#" className="home-3-blog-card">
                        <div className="home-3-blog-card-img">
                            <img src={Img3} alt="" />
                        </div>
                        <span className="home-3-blog-mini-tit">Breeding</span>

                        <h4 className="home-3-blog-main-tit">
                        Daycare and boarding with playtime.
                        </h4>

                        <p>Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Fermentum leo vel orci porta non pulvinar neque. Dictumst quisque sagittis purus sit amet volutpat consequat mauris.</p>

                        <div className="home-3-blog-author-name-nd-date">
                            <div>
                                <img src={Author3} alt="" />
                                <h4>Ashley Carter</h4>
                            </div>

                            <p>August 20, 2022</p>
                        </div>
                    </a>
                </div>
            </div>

            <a href="#" className="home3-Our-Blogs-btn primary-btn">
            View More
            </a>
        </div>
     </section>
    </>
  )
}

export default Home3BlogsSec