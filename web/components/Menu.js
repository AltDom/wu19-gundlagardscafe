import Link from "next/link";

const Menu = ({ props }) => {
  return (
    <>
      <ul>
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
    </>
  );
};

export default Menu;
