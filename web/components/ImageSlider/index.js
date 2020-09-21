import styles from "./ContactForm.module.css";
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

const ImageSlider = () => {
  {
    var slider = tns({
      container: ".my-slider",
      items: 3,
      slideBy: "page",
      autoplay: true,
    });
  }

  console.log(tns);

  return (
    <div className={imageSlider}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ImageSlider;
