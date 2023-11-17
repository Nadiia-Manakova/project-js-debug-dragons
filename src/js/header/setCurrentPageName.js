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

export const setCurrentPageNameModal = () => {
  const currentPageName = window.location.pathname;
  if (currentPageName === '/index.html') {
    headeRrefs.headerMobilePageHome.classList.add('header-yellow');
    headeRrefs.headerMobilePageShopping.classList.remove('header-yellow');
  }
  if (currentPageName === '/page-2.html') {
    headeRrefs.headerMobilePageHome.classList.remove('header-yellow');
    headeRrefs.headerMobilePageShopping.classList.add('header-yellow');
  }
};

export function setCurrentPageName() {
  const currentPage = window.location.pathname;
  console.log(currentPage);

  const navButtons = document.querySelectorAll('.nav-btn');
  console.log(navButtons);

  navButtons.forEach(button => {
    console.log(button);
    const buttonPage = new URL(button.dataset.page, window.location.origin)
      .pathname;
    console.log(buttonPage);

    if (currentPage === buttonPage) {
      button.classList.add('header-yellow');
    } else {
      button.classList.remove('header-yellow');
    }
  });
}
