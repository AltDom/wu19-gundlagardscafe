import styles from './Events.module.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import BlockContent from '@sanity/block-content-to-react';

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
              className={styles.images}
              src={urlFor(event.mainImage.asset).url()}
              alt={event.eventname}
            />
            <BlockContent className={styles.eventText} blocks={event.body} />
          </div>
        );
      })}
    </section>
  );
};

export default Events;
