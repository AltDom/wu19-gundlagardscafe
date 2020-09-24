import Layout from '../components/Layout';
import client from '../client';
import Footer from '../components/Footer';
import UpperSectionDesktop from '../components/UpperSectionDesktop';
import styles from './index.module.css';
import getLocalProps from '../functions/getLocalProps';
import InstagramFeed from '../components/InstagramFeed';
import InstaFeedDesktop from '../components/InstaFeedDesktop';
import BlockContent from '@sanity/block-content-to-react';
import StreetMap from '../components/StreetMap';

const Index = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      <div className={styles.frontPage}>
        <div className={styles.buttonSection}>
          <a href="/mat-och-catering">
            <button>
              <p>MAT & CATERING</p>
              <img src="/images/Food.png" />
            </button>
          </a>
          <a href="/evenemang">
            <button>
              <p>EVENEMANG</p>
              <img src="/images/calendar.png" />
            </button>
          </a>
        </div>
        <BlockContent className={styles.mobileText} blocks={currentPageData.bodyThree} />
        <a href={'https://www.facebook.com/gundlagardscafe'} className={styles.facebookButton}>
          FACEBOOK
        </a>
        <UpperSectionDesktop currentPageData={currentPageData} />
        <InstagramFeed props={props.instaJson} />
        <InstaFeedDesktop props={props.instaJson} />
        <a href={'https://www.facebook.com/gundlagardscafe'} className={styles.instagramButton}>
          INSTAGRAM
        </a>
        <BlockContent className={styles.mobileText} blocks={currentPageData.bodyFour} />
      </div>

      <StreetMap />
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');
  const footerFields = await client.fetch('*[_type == "footer"]');
  const instagram = await fetch('https://www.instagram.com/gundlagardscafe/?__a=1');

  const instaJson = await instagram.json();

  return {
    props: { pages, footerFields, instaJson }
  };
}

export default Index;
