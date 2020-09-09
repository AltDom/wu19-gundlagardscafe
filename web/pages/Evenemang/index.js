import client from "../../client";
import Layout from "../../components/Layout";

    const Information = (props) => {
      return (
        <>
          <Layout props={props.pages[1]} />
          <h1>{props.pages[3].heroText}</h1>
          {console.log(props.pages[0].heroText)}
        </>
      )
    };

export async function getStaticProps() {

  const pages = await client.fetch('*[_type == "page" ]');

  return {
    props: { pages },
  };
}

export default Information;
