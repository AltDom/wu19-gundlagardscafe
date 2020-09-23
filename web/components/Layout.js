import Head from "next/head";
import Header from "./Header";

const Layout = ({ props, currentPageData }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>{currentPageData.title + " - Gundla Gårdscafé" || "Gundla Gårdscafé"}</title>;
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header props={props} currentPageData={currentPageData} />
    </>
  );
};

export default Layout;
