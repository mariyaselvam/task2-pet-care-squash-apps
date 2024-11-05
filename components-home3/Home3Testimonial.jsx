import Starts from "../src/assets/home-3/Home3TestimonialCard/stars.png"


import PrifleImg1 from "../src/assets/home-3/Home3TestimonialCard/card-profile-2.png"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Home3Testimonial = () => {
  return (
    <>
    <section className="Home3-Testimonial-sec">
        <div className="container">
            <div className="row">
                <div className="Home3-Testimonial-swiper-wraper">
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg1} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg1} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Home3-Testimonial-sec-card">
            <div className="Home3-Testimonial-card-tit">
            Testimonial
            </div>
            <div className="Home3-Testimonial-card-rating">
            ⭐⭐⭐⭐⭐
            </div>

            <div className="Home3-Testimonial-card-profile">
                <img src={PrifleImg1} alt="" />
            </div>

            <h4 className="Home3-Testimonial-profile-name">
            Freddie Deckow
            </h4>

            <span className="Home3-Testimonial-profile">
            Lead Marketing Administrator
            </span>

            <p>
            Donec et odio pellentesque diam volutpat commodo sed egestas. Rhoncus urna neque viverra justo nec ultrices varius morbi enim nunc faucibusmalesuada fames ac turpis egestas maecenas.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home3Testimonial