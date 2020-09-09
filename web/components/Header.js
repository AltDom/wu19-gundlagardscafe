import Menu from './Menu';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props }) => {
  return (
    <>
      <Menu props={props} />
      <img src={urlFor(props.local.heroImage.asset).width(200).url()} />
    </>
  );
};

export default Header;
