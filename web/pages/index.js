import Layout from "../components/Layout";
import client from "../client";
import Footer from "../components/Footer";
// import styles from '../styles/layout.module.css';
import styles from "./index.module.css";
import InstagramFeed from "../components/InstagramFeed";

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
        <InstagramFeed props={props.instaJson} />
        <button className={styles.instagramButton}> INSTAGRAM </button>
        <h1 className={styles.mainHeader}> HITTA HIT</h1>

        <iframe
          className={styles.map}
          src="https://www.openstreetmap.org/export/embed.html?bbox=12.01710063032806%2C57.680112457925965%2C12.035125074908137%2C57.68782099172957&amp;layer=mapnik"
        ></iframe>
      </div>
      <Footer props={props.footerFields} />
    </>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');
  const footerFields = await client.fetch('*[_type == "footer"]');
  const instagram = await fetch(
    "https://www.instagram.com/gundlagardscafe/?__a=1"
  );

  const instaJson = await instagram.json();

  return {
    props: { pages, footerFields, instaJson },
  };
}

export default Index;
