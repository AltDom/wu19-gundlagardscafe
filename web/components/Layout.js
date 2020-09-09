import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ props }) => {
  return (
    <>
      <Header props={props}>
        <title>{props.title || "Missing title props"}</title>
      </Header>
      <Footer />
    </>
  );
};

export default Layout;
