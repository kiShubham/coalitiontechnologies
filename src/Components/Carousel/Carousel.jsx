// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";
import image1 from "../../assets/lam-first-carousel-image.png";
import image2 from "../../assets/lam-second-carousel-image.png";
import image3 from "../../assets/benjamin-voros-phIFdC6lA4E-unsplash - Copy.jpg";

const Controls = ({}) => {
  const swiper = useSwiper(".swiper", {
    mousewheel: {
      invert: true,
    },
  }); // swiper will be an obj , useSwiper is a hook ;

  useEffect(() => {
    swiper.slideTo(0, 2000); //1st param:from which slide we want to start ; 2nd param :speed : null (default ) can give in ms like 10,1000 or 500 whatever
  }, []);

  return <></>;
};
const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <Controls />
        <CarouselLeftNav />
        <CarouselRightNav />
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
