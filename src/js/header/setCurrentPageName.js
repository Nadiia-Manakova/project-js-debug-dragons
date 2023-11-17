
import { headeRrefs } from './headerConst';

export const setCurrentPageName = () => {
  const currentPageName = window.location.pathname;
  if (currentPageName === '/index.html') {
    headeRrefs.headerPageHome.classList.add('header-yellow');
    headeRrefs.headerPageShopping.classList.remove('header-yellow');
    return
  }
  if (currentPageName === '/page-2.html') {
    headeRrefs.headerPageHome.classList.remove('header-yellow');
    headeRrefs.headerPageShopping.classList.add('header-yellow');
    return
  }
};

export const setCurrentPageNameModal = () => {
  const currentPageName = window.location.pathname;
  if (currentPageName === '/index.html') {
    headeRrefs.headerMobilePageHome.classList.add('header-yellow');
    headeRrefs.headerMobilePageShopping.classList.remove('header-yellow');
    return
  }
  if (currentPageName === '/page-2.html') {
    headeRrefs.headerMobilePageHome.classList.remove('header-yellow');
    headeRrefs.headerMobilePageShopping.classList.add('header-yellow');
    return
  }
};
