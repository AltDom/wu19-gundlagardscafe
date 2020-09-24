import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuDesktop.module.css';

const MenuDesktop = ({ props }) => {
  return (
    <ul className={styles.desktopMenu}>
      {props.pages.map((page, i) => {
        {
          if (page.slug) {
            return (
              <li
                key={i}
                className={
                  useRouter().pathname == `/${page.slug.current}`
                    ? `${styles.activeNavElement}`
                    : 'not-active'
                }
              >
                <Link href={`/${page.slug.current}`} as={`/${page.slug.current}`}>
                  <a>{page.title}</a>
                </Link>{' '}
              </li>
            );
          }
        }
      })}
    </ul>
  );
};

export default MenuDesktop;
