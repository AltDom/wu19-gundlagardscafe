import client from "../../client";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import getLocalProps from "../../functions/getLocalProps";
import ContactForm from "../../components/ContactForm";
import styles from "./Information.module.css";

const Information = (props) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Layout props={props} currentPageData={currentPageData} />
      <div className={styles.upperSection}>
        <h1>OM OSS </h1>
        <div className={styles.infoSection}>
          <div>
            <p>
              {" "}
              Vi är ett utomhuscafé i kanten av Delsjö Naturreservat som utöver
              smarrig fika och härliga sallader, erbjuder en skön och avslappnad
              miljö bort från stress och oro. Här ersätter vi stadens brus med
              trädens sus. Du klär dig efter väder och cyklar eller promenerar
              hit. Det är en del av vår tanke, att lämna bilen hemma.{" "}
            </p>
          </div>
          <div>
            <p>
              På Gundla gårdscafé försöker vi skapa en miljö så samspelt med
              naturen som möjligt, med återvunna och organiska material. Vi
              bakar och lagar all mat själva och använder i största möjliga mån
              ekologiskt och närproducerat. Vi hoppas att det känns. Välkomna
              till oss!
            </p>
          </div>
        </div>

        <h1>TA DIG HIT </h1>
        <p>
          Till oss kan du alltid räkna med en promenad på minst 15 minuter.{" "}
        </p>
      </div>
      <iframe
        className={styles.map}
        src="https://www.openstreetmap.org/export/embed.html?bbox=12.01710063032806%2C57.680112457925965%2C12.035125074908137%2C57.68782099172957&amp;layer=mapnik"
      ></iframe>
      <div className={styles.bottomSection}>
        <div>
          <h2>BUSS</h2>
          <p>
            Du kan ta buss 50 eller 86 till Kallebäck. Du kan ta röd eller grön
            express till Delsjömotet. Härifrån går du längs golfbanan.{" "}
          </p>
        </div>
        <div>
          <h2>BIL </h2>
          <p>
            Vi kan inte erbjuda parkering och vi finns på slutet av en privat
            väg. Om du ändå tar bilen hit går det bra att parkera på
            Kolerakyrkogårdens parkering som ligger nedanför golfklubben. Det
            går också fint att ställa sig på Delsjöbadets parkering.{" "}
          </p>
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

export default Information;
