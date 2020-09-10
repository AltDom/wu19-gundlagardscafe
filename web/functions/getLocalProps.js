import { useRouter } from 'next/router';

export default function getLocalProps(props) {
  const currentURL = useRouter().pathname;
  let currentPageData = {};

  props.pages.map((page) => {
    if (!page.slug || `/${page.slug.current}` == currentURL) {
      currentPageData = page;
    }
  });

  return currentPageData;
}
