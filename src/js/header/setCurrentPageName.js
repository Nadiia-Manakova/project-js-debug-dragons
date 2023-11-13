import { headeRrefs } from './headerConst';

export const setCurrentPageName = () => {
  const currentPageName = window.location.pathname;
  if (currentPageName === '/index.html') {
    headeRrefs.headerPageHome.classList.add('header-yellow');
    headeRrefs.headerPageShopping.classList.remove('header-yellow');
  }
  if (currentPageName === '/page-2.html') {
    headeRrefs.headerPageHome.classList.remove('header-yellow');
    headeRrefs.headerPageShopping.classList.add('header-yellow');
  }
};
