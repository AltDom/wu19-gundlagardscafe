// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import Layout from "../components/Layout";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Page = (props) => {
  const {
    title = "Missing title",
    heroImage,
    heroText = "",
    body = [],
  } = props;
  {
    console.log(props);
  }
  return (
    // <Layout props={props} />

    <article>
      <h1>{title}</h1>
      <h2>{heroText}</h2>
      <img src={urlFor(heroImage).width(50).url()} />

      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />
    </article>
  );
};

export async function getStaticProps() {
  const page = await client.fetch(
    '*[_type == "page" && slug.current == $slug][0]'
  );

  return {
    props: { page },
  };
}

// const query = groq`*[_type == "page" && slug.current == $slug][0]`;

// Page.getInitialProps = async function (context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query;
//   return await client.fetch(query, { slug });
// };

export default Page;
