import styles from "./frontPageDesktop.module.css";

const UpperSectionDesktop = () => {
  console.log("HEJ");
  return (
    <div className={styles.frontPageDesktop}>
      <div className={styles.aboutUs}>
        <h1> OM OSS</h1>
        <p>
          Vi är ett utomhuscafé i kanten av Delsjö Naturreservat som utöver
          smarrig fika och härliga sallader, erbjuder en skön och avslappnad
          miljö bort från stress och oro.{" "}
        </p>
      </div>

      <div className={styles.openingHours}>
        <h1> ÖPPETTIDER </h1>
        <p>
          Våra öppettider är baserade på väderlek. Är det fint väder så kan ni
          ge er sjutton på att det är öppet. Men om ni är osäkra så uppdaterar
          vi om öppettiderna varje dag på våra sociala medier.{" "}
        </p>
        <div className={styles.bottomSection}>
          <button className={styles.facebookButton}> FACEBOOK </button>
          <button className={styles.instagramButton}> INSTAGRAM </button>
        </div>
      </div>
    </div>
  );
};

export default UpperSectionDesktop;
