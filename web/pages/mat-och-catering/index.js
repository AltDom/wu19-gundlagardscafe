import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import getLocalProps from "../../functions/getLocalProps";
import ContactForm from "../../components/ContactForm";
import ImageSlider from "../../components/ImageSlider";
import styles from "./mat-och-catering.module.css";
import BodyContentBlock from "../../components/BodyContentBlock";

const MatCatering = (props) => {
  const currentPageData = getLocalProps(props);

  console.log(currentPageData);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      {/* <BodyContentBlock
        heading={currentPageData.bodyOneHeading}
        paragraphArray={currentPageData.bodyOne}
      /> */}
      <div className={styles.cafeCateringInfo}>
        <div className={styles.cafeInfo}>
          <h1>CAFEÉT</h1>
          <p>
            {" "}
            Vi serverar matiga sallader med goda röror och rostade frön, härliga
            mackor på hembakad focaccia eller råg. Vi har också smarriga
            bakverk, mjuka kakor, bullar, pajer mm. Allt bakas och lagas här av
            oss själva och vi har både vegetariskt, veganskt och glutenfritt.{" "}
          </p>
        </div>
        <ImageSlider />
        <div className={styles.cateringInfo}>
          <h1>CATERING</h1>
          <p>
            {" "}
            Vi har en stor erfarenhet av catering till både små och stora
            tillställningar. Vi tar uppdrag för filmproduktioner, företag,
            privata fester och kalas, studentfirande, bröllop, begravningar och
            allt däremellan. Vi har också utformat en coronavänlig catering med
            små mingeltallrikar istället för större bufféer.{" "}
          </p>
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
