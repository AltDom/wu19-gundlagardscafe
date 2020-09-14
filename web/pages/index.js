import Layout from '../components/Layout';
import client from '../client';
import Footer from '../components/Footer';
// import styles from '../styles/layout.module.css';

const Index = (props) => {
  return (
    <>
      <Layout props={props} />
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');
  const footerFields = await client.fetch('*[_type == "footer"]');

  return {
    props: { pages, footerFields }
  };
}

export default Index;
