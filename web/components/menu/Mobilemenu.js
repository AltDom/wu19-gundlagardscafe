import Link from "next/link";
import styles from './Mobilemenu.module.css';

const Mobilemenu = ({ props }) => {
  return (
      <ul className={styles.mobileMenu}>
        {props.pages.map((page, i) => {
          {
            if (page.slug) {
              return (
                <li key={i}>
                  <Link
                    href={`/${page.slug.current}`}
                    as={`/${page.slug.current}`}
                  >
                    <a>{page.title}</a>
                  </Link>{" "}
                </li>
              );
            }
          }
        })}
      </ul>
  )
};


export default Mobilemenu;
