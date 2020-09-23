import Layout from "../components/Layout";
import client from "../client";
import Footer from "../components/Footer";
import UpperSectionDesktop from "../components/UpperSectionDesktop";
import styles from "./index.module.css";
import getLocalProps from "../functions/getLocalProps";
import InstagramFeed from "../components/InstagramFeed";
import StreetMap from "../components/StreetMap";
import InstagramFeedDesktop from "../components/InstagramFeedDesktop";

const Index = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      {console.log(currentPageData)}
      <Layout props={props} currentPageData={currentPageData} />
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
        <h1 className={styles.mainHeaderOpening}> ÖPPETTIDER</h1>
        <p className={styles.openingHoursInfo}>
          Våra öppetitdasjdsadff ihsafhsa ifhiha{" "}
        </p>
        <button className={styles.facebookButton}> FACEBOOK </button>
        <UpperSectionDesktop currentPageData={currentPageData} />
        <InstagramFeed props={props.instaJson} />
        <InstagramFeedDesktop props={props.instaJson} />
        <button className={styles.instagramButton}> INSTAGRAM </button>
        <h1 className={styles.mainHeaderFind}> HITTA HIT</h1>
      </div>

      <StreetMap />
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
