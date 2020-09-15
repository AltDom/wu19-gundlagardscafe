import { useRouter } from 'next/router';

export default function getLocalProps(props) {
  const currentURL = useRouter().pathname;
  let currentPageData = {};
  let tempPage = {};
  let pageFound = false;

  props.pages.map((page) => {
    if (!page.slug || `/${page.slug.current}` == currentURL) {
      if (!page.slug && !pageFound) {
        tempPage = page;
      } else if (!page.slug && pageFound) {
      } else if (`/${page.slug.current}` == currentURL) {
        currentPageData = page;
        pageFound = true;
      }
      if (!pageFound) {
        currentPageData = tempPage;
      }
    }
  });

  return currentPageData;
}
