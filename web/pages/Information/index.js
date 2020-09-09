import client from '../../client';
import Layout from '../../components/Layout';

const Information = (props) => {
  return (
    <>
      <Layout props={props} />
      <h1>{props.pages[2].heroText}</h1>
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page" ]');
  const local = await client.fetch(`*[_type == "page"][2]`);

  return {
    props: { pages, local }
  };
}

export default Information;
