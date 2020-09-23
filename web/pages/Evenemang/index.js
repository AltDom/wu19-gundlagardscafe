import client from '../../client';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Events from '../../components/Events';
import BlockContent from '@sanity/block-content-to-react';
import getLocalProps from '../../functions/getLocalProps';

const Information = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />

      <BlockContent blocks={currentPageData.bodyOne} />
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
