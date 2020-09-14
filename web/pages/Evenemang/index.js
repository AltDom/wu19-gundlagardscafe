import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

const Information = (props) => {
  return (
    <>
      <Layout props={props} />
      <h1>{props.pages[3].heroText}</h1>
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page" ]');
  const footerFields = await client.fetch('*[_type == "footer"]');

  return {
    props: { pages, footerFields },
  };
}

export default Information;
