import styles from "./Events.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import BodyContentBlock from "./BodyContentBlock";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Events = ({ props }) => {


  return (
    <section className={styles.eventsSection}>
      {props.map((event, i) => {
        return (
          <div className={styles.eventCard}>
            <img
              src={urlFor(event.mainImage.asset).url()}
              alt={event.eventname}
            />
            <BodyContentBlock
              heading={event.eventname}
              paragraphArray={event.body}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Events;
