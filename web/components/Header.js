import Menu from './Menu';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import getLocalProps from '../functions/getLocalProps';
import styles from './Header.module.css';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props, currentPageData }) => {
  return (
    <>
      <Menu props={props} />
      <div className={styles.headerContainer}>
        <div className={styles.heroDiv}>
          {!currentPageData.slug && (
            <div className={styles.relativeHeroDivMain}>
              <img src="/images/site-title.svg" className={styles.siteTitleImage} />

              <h1 className={styles.heroText}>Välkommen till caféet i stan men mitt i naturen</h1>
            </div>
          )}
          {currentPageData.slug && (
            <div className={styles.relativeHeroDiv}>
              <img src="/images/black-graphic.svg" className={styles.blackGraphic} />
              <h1 className={styles.heroTitle}>{currentPageData.title}</h1>
            </div>
          )}
        </div>
        <img src={urlFor(currentPageData.heroImage.asset).url()} className={styles.heroImage} />
      </div>
    </>
  );
};

export default Header;
