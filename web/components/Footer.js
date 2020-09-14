import styles from './Footer.module.css';

const Footer = ({ props }) => {
  return (
    <div className={styles.footer1}>
      <h1> Kontakt </h1>
      <p>{props[0].header} </p>
      <p>{props[0].mail} </p>
      <p>{props[0].phoneNumber} </p>
      <p>{props[0].adress} </p>
    </div>
  );
};

export default Footer;
