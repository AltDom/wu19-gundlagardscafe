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

  return {
    props: { pages }
  };
}

export default Index;
