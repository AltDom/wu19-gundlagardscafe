import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import getLocalProps from "../../functions/getLocalProps";
import ContactForm from "../../components/ContactForm";
import ImageSlider from "../../components/ImageSlider";
import styles from "./mat-och-catering.module.css";
import BlockContent from "@sanity/block-content-to-react";

const MatCatering = (props) => {
  const currentPageData = getLocalProps(props);

  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      <div className={styles.cafeCateringInfo}>
        <div className={styles.cafeInfo}>
          <BlockContent blocks={currentPageData.bodyOne} />
        </div>
        <ImageSlider />
        <div className={styles.cateringInfo}>
          <BlockContent blocks={currentPageData.bodyTwo} />
        </div>
      </div>

      <h1 className={styles.weServeHeader}>VAD VI SERVERAR I CAFEET</h1>
      <div className={styles.imageContainerDesktop}>
        <div styles={styles.imageDiv}>
          <img src="/images/soup.png" />
        </div>
        <div styles={styles.imageDiv}>
          {" "}
          <img src="/images/sandwich.png" />
        </div>
        <div styles={styles.imageDiv}>
          {" "}
          <img src="/images/salads.png" />
        </div>
        <div styles={styles.imageDiv}>
          {" "}
          <img src="/images/desserts.png" />
        </div>
      </div>
      <ContactForm />
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
