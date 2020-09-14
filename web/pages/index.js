import Layout from "../components/Layout";
import client from "../client";
import Footer from "../components/Footer";
// import styles from '../styles/layout.module.css';
import styles from "./index.module.css";

const Index = (props) => {
  return (
    <>
      <Layout props={props} />
      <div className={styles.frontPage}>
        <div className={styles.buttonSection}>
          <button>
            <p> MAT & CATERING</p> <img src="/images/Food.png" />
          </button>
          <button>
            <p> EVENEMANG </p>
            <img src="/images/calendar.png" />
          </button>
        </div>
        <h1 className={styles.mainHeader}> ÖPPETTIDER</h1>
        <p>Våra öppetitdasjdsadff ihsafhsa ifhiha </p>
        <button className={styles.facebookButton}> FACEBOOK </button>
      </div>

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
