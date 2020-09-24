import client from '../../client';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import getLocalProps from '../../functions/getLocalProps';
import ContactForm from '../../components/ContactForm';
import styles from './information.module.css';
import BlockContent from '@sanity/block-content-to-react';
import StreetMap from '../../components/StreetMap';

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
      <StreetMap />

      <div className={styles.bottomSection}>
        <BlockContent blocks={currentPageData.bodyThree} />
        <BlockContent blocks={currentPageData.bodyFour} />
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
