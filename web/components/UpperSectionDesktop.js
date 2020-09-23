import styles from './UpperSectionDesktop.module.css';
import BlockContent from '@sanity/block-content-to-react';

const UpperSectionDesktop = ({ currentPageData }) => {
  return (
    <div className={styles.frontPageDesktop}>
      <div className={styles.aboutUs}>
        <BlockContent blocks={currentPageData.bodyOne} />
      </div>

      <div className={styles.openingHours}>
        <BlockContent blocks={currentPageData.bodyTwo} />
        <div className={styles.bottomSection}>
          <a href="https://www.facebook.com/gundlagardscafe" className={styles.facebookButton}>
            FACEBOOK
          </a>
          <a href="https://www.instagram.com/gundlagardscafe" className={styles.instagramButton}>
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperSectionDesktop;
