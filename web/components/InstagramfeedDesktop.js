import styles from "./InstagramFeedDesktop.module.css";

const InstagramFeedDesktop = ({ props }) => {
  const allImages = props.graphql.user.edge_owner_to_timeline_media.edges;
  const eightImages = allImages.slice(0, 8);

  return (
    <>
      <h1 className={styles.instaHeader}>@GUNDLAGARDSCAFE </h1>
      <div className={styles.imgWrapperDesktop}>
        {eightImages.map((image, i) => (
          <div className={styles.instaImgDivDesktop}>
            <img
              className={styles.instaImgDesktop}
              src={image.node.display_url}
              key={i}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InstagramFeedDesktop;
