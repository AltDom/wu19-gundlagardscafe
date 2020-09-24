import client from '../../client';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Events from '../../components/Events';
import BlockContent from '@sanity/block-content-to-react';
import getLocalProps from '../../functions/getLocalProps';
import styles from './evenemang.module.css';

const Information = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      <div className={styles.eventInfo}>
        <BlockContent blocks={currentPageData.bodyOne} />
      </div>
      <a href={'https://www.facebook.com/gundlagardscafe'} className={styles.facebookButton}>
        FACEBOOK
      </a>
      <Events props={props.eventData} />
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page" ]');
  const footerFields = await client.fetch('*[_type == "footer"]');
  const eventData = await client.fetch('*[_type == "events"] | order(position asc)');
  return {
    props: { pages, footerFields, eventData }
  };
}

export default Information;
