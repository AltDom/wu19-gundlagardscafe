import client from '../../client';
import Layout from '../../components/Layout';

const MatCatering = (props) => {
  return (
    <>
      <Layout props={props} />
      <h1>{props.pages[0].heroText}</h1>
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page" ]');
  const local = await client.fetch(`*[_type == "page"][0]`);

  return {
    props: { pages, local }
  };
}

export default MatCatering;
