
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="main-slider">
      <div className="container slider-con">
        <h2>Clients Testimonial</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Images/Frame 79.png" alt="" />
            <div className="slider-content">
              <img src="/Images/bi_quote.png" alt="" />
              <h5>I can't praise Hb & SONS LLC enough for their exceptional services.</h5>
              <h5>
              Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.</h5>
              <h4>John Smith,</h4>
              <p>CEO, EnergyCorp Inc.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/Images/Frame 79.png" alt="" />
            <div className="slider-content">
              <img src="/Images/bi_quote.png" alt="" />
              <h5>I can't praise Hb & SONS LLC enough for their exceptional services.</h5>
              <h5>
              Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.</h5>
              <h4>John Smith,</h4>
              <p>CEO, EnergyCorp Inc.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/Images/Frame 79.png" alt="" />
            <div className="slider-content">
              <img src="/Images/bi_quote.png" alt="" />
              <h5>I can't praise Hb & SONS LLC enough for their exceptional services.</h5>
              <h5>
              Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.</h5>
              <h4>John Smith,</h4>
              <p>CEO, EnergyCorp Inc.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/Images/Frame 79.png" alt="" />
            <div className="slider-content">
              <img src="/Images/bi_quote.png" alt="" />
              <h5>I can't praise Hb & SONS LLC enough for their exceptional services.</h5>
              <h5>
              Their team's dedication to safety and on-time fuel deliveries has been a game-changer for our operations. We're proud to have them as our fuel transport partner.</h5>
              <h4>John Smith,</h4>
              <p>CEO, EnergyCorp Inc.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
