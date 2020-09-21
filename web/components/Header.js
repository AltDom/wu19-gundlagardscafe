import Navbar from "./menu/Navbar";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import getLocalProps from "../functions/getLocalProps";
import styles from "./Header.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props }) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.heroDiv}>
          <Navbar props={props} />
          <div className={styles.relativeHeroDiv}>
            <img
              src="/images/black-graphic.svg"
              className={styles.blackGraphic}
            />
            <h1 className={styles.heroTitle}>{currentPageData.title}</h1>
          </div>
        </div>
        <img
          src={urlFor(currentPageData.heroImage.asset).url()}
          className={styles.heroImage}
        />
      </div>
    </>
  );
};

export default Header;
