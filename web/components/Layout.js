import Head from "next/head";
import Header from "./Header";
import getLocalProps from "../functions/getLocalProps";

const Layout = ({ props }) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>{currentPageData.title || "Missing title props"}</title>;
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&family=Quavo&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
        />
      </Head>
      <Header props={props} />
    </>
  );
};

export default Layout;
