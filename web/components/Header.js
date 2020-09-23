import Navbar from './menu/Navbar';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import styles from './Header.module.css';
import HeroImage from './HeroImage';
import BlockContent from '@sanity/block-content-to-react';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props, currentPageData }) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.heroDiv}>
          <Navbar props={props} />
          {!currentPageData.slug && (
            <div className={styles.relativeHeroDivMain}>
              <BlockContent className={styles.heroText} blocks={currentPageData.heroText} />
            </div>
          )}
          {currentPageData.slug && (
            <div className={styles.relativeHeroDiv}>
              <img src="/images/black-graphic.svg" className={styles.blackGraphic} />
              <h1 className={styles.heroTitle}>{currentPageData.title}</h1>
            </div>
          )}
        </div>
        <HeroImage
          rawURL={urlFor(currentPageData.heroImage.asset).url()}
          height={currentPageData.desktopHeroImageHeight}
          alt={``}
        />
      </div>
    </>
  );
};

export default Header;
