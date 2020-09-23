import client from '../../client';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import getLocalProps from '../../functions/getLocalProps';
import ContactForm from '../../components/ContactForm';
import styles from './Information.module.css';
import BlockContent from '@sanity/block-content-to-react';

const Information = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      <div className={styles.upperSection}>
        <div className={styles.infoSection}>
          <BlockContent blocks={currentPageData.bodyOne} />
          <BlockContent blocks={currentPageData.bodyTwo} />
        </div>
      </div>
      <iframe
        className={styles.map}
        src="https://www.openstreetmap.org/export/embed.html?bbox=12.01710063032806%2C57.680112457925965%2C12.035125074908137%2C57.68782099172957&amp;layer=mapnik"
      ></iframe>
      <div className={styles.bottomSection}>
        {/* <div className={styles.infoSection}> */}
        <BlockContent blocks={currentPageData.bodyThree} />
        <BlockContent blocks={currentPageData.bodyFour} />
        {/* </div> */}
      </div>
      <ContactForm />
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page" ]');
  const footerFields = await client.fetch('*[_type == "footer"]');

  return {
    props: { pages, footerFields }
  };
}

export default Information;
