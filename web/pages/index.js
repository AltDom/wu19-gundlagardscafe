// index.js
import Link from 'next/link';
import groq from 'groq';
import client from '../client';

const Index = (props) => {
  const { pages = [] } = props;
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {console.log(pages)}
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
    </div>
  );
};

Index.getInitialProps = async () => ({
  pages: await client.fetch(groq`
      *[_type == "page"]
    `)
});

export default Index;
