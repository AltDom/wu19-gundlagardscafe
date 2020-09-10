import Menu from './Menu';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import getLocalProps from '../functions/getLocalProps';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props }) => {
  const currentPageData = getLocalProps(props);
  return (
    <>
      <Menu props={props} />
      <img src={urlFor(currentPageData.heroImage.asset).width(200).url()} />;
    </>
  );
};

export default Header;
