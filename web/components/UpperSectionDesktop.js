import styles from './UpperSectionDesktop.module.css';
import BodyContentBlock from './BodyContentBlock';

const UpperSectionDesktop = ({ currentPageData }) => {
  return (
    <div className={styles.frontPageDesktop}>
      <div className={styles.aboutUs}>
        <BodyContentBlock
          heading={currentPageData.bodyOneHeading}
          paragraphArray={currentPageData.bodyOne}
        />
      </div>

      <div className={styles.openingHours}>
        <BodyContentBlock
          heading={currentPageData.bodyTwoHeading}
          paragraphArray={currentPageData.bodyTwo}
        />
        <div className={styles.bottomSection}>
          <button className={styles.facebookButton}> FACEBOOK </button>
          <button className={styles.instagramButton}> INSTAGRAM </button>
        </div>
      </div>
    </div>
  );
};

export default UpperSectionDesktop;
