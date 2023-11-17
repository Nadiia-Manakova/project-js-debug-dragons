import { headeRrefs } from './headerConst';


// export const setCurrentPageName = () => {
//   const currentPageName = window.location.pathname;
//   if (currentPageName === '/index.html') {
//     headeRrefs.headerPageHome.classList.add('header-yellow');
//     headeRrefs.headerPageShopping.classList.remove('header-yellow');
//   }
//   if (currentPageName === '/page-2.html') {
//     headeRrefs.headerPageHome.classList.remove('header-yellow');
//     headeRrefs.headerPageShopping.classList.add('header-yellow');
//   }
// };


// export const setCurrentPageNameModal = () => {
//   const currentPageName = window.location.pathname;
//   if (currentPageName === '/index.html') {
//     headeRrefs.headerMobilePageHome.classList.add('header-yellow');
//     headeRrefs.headerMobilePageShopping.classList.remove('header-yellow');
//   }
//   if (currentPageName === '/page-2.html') {
//     headeRrefs.headerMobilePageHome.classList.remove('header-yellow');
//     headeRrefs.headerMobilePageShopping.classList.add('header-yellow');
//   }
// };

export function setCurrentPageNameModal() {
  const basePath = '/project-js-debug-dragons';

  const currentPage = window.location.pathname.replace(basePath, '');

  const navButtons = document.querySelectorAll('.mobile__nav-btn');


  navButtons.forEach(button => {
    const buttonPage = new URL(button.dataset.page, window.location.origin)
      .pathname;

    if (currentPage === buttonPage) {
      button.classList.add('header-yellow');
    } else {
      button.classList.remove('header-yellow');
    }
  });
}
export function setCurrentPageName() {
  const basePath = '/project-js-debug-dragons';

  const currentPage = window.location.pathname.replace(basePath, '');

  const navButtons = document.querySelectorAll('.nav-btn');

  navButtons.forEach(button => {
    const buttonPage = new URL(button.dataset.page, window.location.origin)
      .pathname;

    if (currentPage === buttonPage) {
      button.classList.add('header-yellow');
    } else {
      button.classList.remove('header-yellow');
    }
  });
}
