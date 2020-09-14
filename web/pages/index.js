import Layout from "../components/Layout";
import client from "../client";
import Footer from "../components/Footer";

const Index = (props) => {
  return (
    <>
      <Layout props={props} />
      <h1>Gundla!!</h1>
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');
  const footerFields = await client.fetch('*[_type == "footer"]');

  return {
    props: { pages, footerFields },
  };
}

export default Index;
