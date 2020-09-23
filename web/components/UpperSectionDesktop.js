import styles from './UpperSectionDesktop.module.css';
import BodyContentBlock from './BodyContentBlock';
import BlockContent from '@sanity/block-content-to-react';

const UpperSectionDesktop = ({ currentPageData }) => {
  return (
    <div className={styles.frontPageDesktop}>
      <div className={styles.aboutUs}>
        <BlockContent blocks={currentPageData.bodyOne} />
      </div>

      <div className={styles.openingHours}>
        <BlockContent blocks={currentPageData.bodyOne} />
        <div className={styles.bottomSection}>
          <button className={styles.facebookButton}> FACEBOOK </button>
          <button className={styles.instagramButton}> INSTAGRAM </button>
        </div>
      </div>
    </div>
  );
};

export default UpperSectionDesktop;
