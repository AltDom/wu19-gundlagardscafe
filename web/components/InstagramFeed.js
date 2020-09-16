import styles from "./InstagramFeed.module.css";

const InstagramFeed = ({ props }) => {
  console.log(props);
  const allImages = props.graphql.user.edge_owner_to_timeline_media.edges;
  const sixImages = allImages.slice(0, 6);

  return (
    <div className={styles.imgWrapper}>
      {sixImages.map((image, i) => (
        <div className={styles.instaImgDiv}>
          <img
            className={styles.instaImg}
            src={image.node.display_url}
            key={i}
          />
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
