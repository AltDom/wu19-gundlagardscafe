import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ props }) => {
  return (
    <>
      <Head>
        <title>{props.title || "Missing title props"}</title>
      </Head>
      <Header props={props} />
      <Footer />
    </>
  );
};

export default Layout;

