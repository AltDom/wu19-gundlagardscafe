import Menu from './Menu';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import getLocalProps from '../functions/getLocalProps';
import styles from './Header.module.css';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props }) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Menu props={props} />
      <img src={urlFor(currentPageData.heroImage.asset).url()} className={styles.heroImage} />
      <div className={styles.heroDiv}>
        {/* <img
          src={urlFor(currentPageData.blackGraphic.asset).url()}
          className={styles.blackGraphic}
        /> */}
        <h1 className={styles.heroTitle}>{currentPageData.title}</h1>
      </div>
    </>
  );
};

export default Header;
