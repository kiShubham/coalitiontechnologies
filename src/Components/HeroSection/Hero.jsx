import React, { useState } from "react";
import styles from "./Hero.module.css";
// import heroImage from "../../assets/lam-hero-image.png";
import Header from "../Header/Header";
import Footer from ".././Footer/Footer";
import oneHeader from "../../assets/lam-big-01-title.png";
import twoHeader from "../../assets/lam-big-02-title.png";
import Carousel from "../Carousel/Carousel";
import scheduleImage from "../../assets/lam-tab-1-schedule.png";

const Hero = () => {
  const [btnClass, setBtnClass] = useState(true);

  const handleBtnClass = () => {
    btnClass ? setBtnClass(false) : setBtnClass(true);
  };

  return (
    <div>
      <div className={styles.hero}>
        <Header />
      </div>
      <Header logoTxt={false} />
      <div className={styles.section1}>
        <div className={styles.oneHeading}>
          <div className={styles.oneChildHeading}>
            <img src={oneHeader} alt="heading" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              nisl nulla. Aliquam erat volutpat. Curabitur id tincidunt sem.
              Proin sit amet pretium quam. Morbi id ornare felis, eget auctor
              lacus. Donec vehicula velit nunc, et dignissim nulla faucibus a.
              Integer nec vehicula erat, et pellentesque ex. Phasellus nisi
              nisi, dapibus id nisi sit amet, finibus varius ligula.
            </p>
          </div>

          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondHeader}>
        <img src={twoHeader} alt="heading" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nisl
          nulla. Aliquam erat volutpat
        </p>
      </div>
      <div className={btnClass ? styles.section2 : styles.sectionMountain2}>
        <div className={styles.MountainBtnWrapper}>
          <div>
            <button
              onClick={handleBtnClass}
              className={
                btnClass ? styles.selectedButton : styles.unselectedButton
              }
            >
              MOUNTAIN 1
            </button>
            <button
              onClick={handleBtnClass}
              className={
                btnClass ? styles.unselectedButton : styles.selectedButton
              }
            >
              MOUNTAIN 2
            </button>
          </div>
          <div></div>
        </div>
        <div className={styles.scheduleImage}>
          <img src={scheduleImage} alt="schedule" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
