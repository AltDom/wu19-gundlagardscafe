import Link from 'next/link';
import styles from './MobileMenu.module.css';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const MobileMenu = ({ props, footerFields }) => {
  return (
    <ul className={styles.mobileMenu}>
      <li className={styles.mobileMenuItem}>
        <hr className={styles.mobileMenuDivider} />
        <Link href={`/`} as={`/`}>
          <a>Hem</a>
        </Link>{' '}
      </li>
      {props.pages.map((page, i) => {
        {
          if (page.slug) {
            return (
              <li className={styles.mobileMenuItem} key={i}>
                <hr className={styles.mobileMenuDivider} />
                <Link href={`/${page.slug.current}`} as={`/${page.slug.current}`}>
                  <a>{page.title}</a>
                </Link>{' '}
              </li>
            );
          }
        }
      })}
      <hr className={styles.mobileMenuDivider} />
      <div className={styles.mobileMenuBottomContainer}>
        <li>
          <img src={urlFor(props.footerFields[0].logo.asset).url()} />
        </li>
        <li>
          <a href={`mailto:${props.footerFields[0].mail}`}>
            {' '}
            <span>{props.footerFields[0].mail}</span>
          </a>
        </li>
        <li>{props.footerFields[0].phoneNumber.replaceAll('mobil: ', '')}</li>
        <li>{props.footerFields[0].adress.replaceAll('adress: ', '')}</li>
      </div>
    </ul>
  );
};

export default MobileMenu;
