<<<<<<< HEAD
import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import styles from "./mat-och-catering.module.css";
=======
import client from '../../client';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import getLocalProps from '../../functions/getLocalProps';
>>>>>>> master

const MatCatering = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
<<<<<<< HEAD
      <Layout props={props} />
      <div className={styles.main}>
        <ContactForm />
      </div>
=======
      <Layout props={props} currentPageData={currentPageData} />
>>>>>>> master
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

export default MatCatering;
