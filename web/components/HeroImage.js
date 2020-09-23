import React from 'react';
import styles from './HeroImage.module.css';

const HeroImage = ({ rawURL, alt, height = '50' }) => {
  return (
    <>
      <div className={styles.gradient}></div>
      <img
        className={styles.heroImage}
        style={{ objectPosition: `50% ${height}%` }}
        src={rawURL}
        alt={alt}
      />
    </>
  );
};

export default HeroImage;
