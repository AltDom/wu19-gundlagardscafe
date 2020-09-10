import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import getLocalProps from '../functions/getLocalProps';

const Layout = ({ props }) => {
  const currentPageData = getLocalProps(props);

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
