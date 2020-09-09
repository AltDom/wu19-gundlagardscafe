import Link from 'next/link';

const Menu = (props) => {
  return (
    <>
      {pages.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
          slug && (
            <li key={_id}>
              <Link href="/[slug]" as={`/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
            </li>
          )
      )}
    </>
  );
};

export default Menu;
