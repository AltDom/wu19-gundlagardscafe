// index.js
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Layout from "../components/Layout";

const Index = (props) => {
  const { pages = [] } = props.pages;
  return (
    <div>
      <Layout props={props.pages} />
      <h1>Welcome to a blog!</h1>
      {/* {console.log(props.pages)}
      {props.pages.map(
        ({ _id, title = '', slug = '', _updatedAt = '' }) =>
          slug && (
            <li key={_id}>
              <Link href="/[slug]" as={`/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
            </li>
          )
      )} */}
    </div>
  );
};

export async function getStaticProps() {
  const pages = await client.fetch('*[_type == "page"]');

  return {
    props: { pages },
  };
}

export default Index;
