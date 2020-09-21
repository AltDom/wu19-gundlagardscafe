import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import styles from "./mat-och-catering.module.css";

const MatCatering = (props) => {
  return (
    <>
      <Layout props={props} />
      <div className={styles.main}>
        <ContactForm />
      </div>
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
