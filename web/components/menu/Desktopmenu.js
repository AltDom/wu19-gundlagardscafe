import Link from "next/link";
import styles from './Dekstopmenu.module.css';

const Desktopmenu = ({ props }) => {
  return (
      <ul className={styles.DesktopMenu}>
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


export default Desktopmenu;
