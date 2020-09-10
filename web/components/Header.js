import Menu from './Menu';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import { useRouter } from 'next/router';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Header = ({ props }) => {
  const currentURL = useRouter().pathname;
  return (
    <>
      <Menu props={props} />
      {props.pages.map((page, i) => {
        if (`/${page.slug.current}` == currentURL) {
          return <img key={i} src={urlFor(page.heroImage.asset).width(200).url()} />;
        }
      })}
    </>
  );
};

export default Header;
