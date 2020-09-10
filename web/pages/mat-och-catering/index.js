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

  return {
    props: { pages }
  };
}

export default MatCatering;
