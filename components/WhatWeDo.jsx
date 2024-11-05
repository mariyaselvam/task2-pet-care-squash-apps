import Img1 from "../src/assets/home/what-we-do/what-we-do-img1.png"
import Img2 from "../src/assets/home/what-we-do/what-we-do-img2.png"
import Img3 from "../src/assets/home/what-we-do/what-we-do-img3.png"


const WhatWeDo = () => {
  return (
    <>
    <section className="what-we-do-sec">
        <div className="what-we-do-tit-wraper">
            <h3 className='what-we-do-main-tit'>What We <b>Do</b>.</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="what-we-do-cards"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className="what-we-do-card-img">
                            <img src={Img1} alt="" />
                        </div>

                        <h4 className="what-we-do-card-tit">
                        Pet Grooming
                        </h4>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>

                        <a href="" className="abt-us-read-more-btn">
                        Read more
                        </a>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="what-we-do-cards"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="what-we-do-card-img">
                            <img src={Img2} alt="" />
                        </div>

                        <h4 className="what-we-do-card-tit">
                        Healthy Meals
                        </h4>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>

                        <a href="" className="abt-us-read-more-btn">
                        Read more
                        </a>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="what-we-do-cards"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <div className="what-we-do-card-img">
                            <img src={Img3} alt="" />
                        </div>

                        <h4 className="what-we-do-card-tit">
                        Veterinary Service
                        </h4>

                        <p>Risus sed vulputate odio ut enim. Cursus in hac habitasse platea dictumst. Tortor dignissim convallis aenean et tortor. Etiam sit amet nisl purus in mollis nunc sed id.</p>

                        <a href="" className="abt-us-read-more-btn">
                        Read more
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhatWeDo