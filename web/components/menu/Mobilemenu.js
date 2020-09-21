import Link from "next/link";
import styles from "./Mobilemenu.module.css";

const Mobilemenu = ({ props }) => {
  return (
    <ul className={styles.mobileMenu}>
      {props.pages.map((page, i) => {
        {
          if (page.slug) {
            return (
              <li key={i}>
                <hr className={styles.mobileMenuDivider} />
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
      <hr className={styles.mobileMenuDivider} />
    </ul>
  );
};

export default Mobilemenu;
