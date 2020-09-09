import Layout from '../components/Layout';
import client from '../client';

const Index = (props) => {
  return (
    <>
      <Layout props={props} />
      <h1>Gundla!!</h1>
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');
  const local = await client.fetch(`*[_type == "page"][1]`);

  return {
    props: { pages, local }
  };
}

export default Index;
