import styles from "./Footer.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Footer = ({ props }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoDiv}>
        <img src={urlFor(props[0].logo.asset).url()} />
      </div>
      <h1> KONTAKT </h1>

      <p>{props[0].footerHeader} </p>

      <a href={`mailto:${props[0].mail}`}>
        {" "}
        <p>{props[0].mail}</p>
      </a>

      <p>{props[0].phoneNumber} </p>
      <p>{props[0].adress} </p>
    </div>
  );
};

export default Footer;
