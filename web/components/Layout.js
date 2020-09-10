import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ props }) => {
  const currentURL = useRouter().pathname;
  let currentPageData = {};
  props.pages.map((page) => {
    if (`/${page.slug.current}` == currentURL) {
      currentPageData = page;
    }
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>{currentPageData.title || 'Missing title props'}</title>;
      </Head>
      <Header props={props} />
      <Footer />
    </>
  );
};

export default Layout;
