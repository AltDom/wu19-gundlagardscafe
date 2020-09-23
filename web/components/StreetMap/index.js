import styles from "./StreetMap.module.css";

const StreetMap = () => {
  return (
    <object
      className={styles.map}
      data="https://www.openstreetmap.org/export/embed.html?bbox=12.02728807926178%2C57.68554537218937%2C12.029541134834291%2C57.686603513397074&amp;layer=mapnik&amp;marker=57.68607444665514%2C12.028414607048035"
    ></object>
  );
};

export default StreetMap;
