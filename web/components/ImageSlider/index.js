import styles from "./ImageSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = () => {
  return (
    <div className={styles.imageSlider}>
      <Swiper
        spaceBetween={60}
        slidesPerView={2}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <img src="/images/soup.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <img src="/images/sandwich.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <img src="/images/desserts.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderItem}>
            <img src="/images/salads.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
