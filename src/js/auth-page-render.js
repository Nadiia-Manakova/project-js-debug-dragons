import { readUserShoppingList } from './auth';
//
// ELEMENTS:
//
// Mobile menu:
const menuSignUpBtn = document.querySelector('.menu-sign-up-btn');
const mobMenuUser = document.querySelector('.mob-menu-user');
const mobMenuUserButtons = document.querySelector('.mob-menu-user-buttons');
const mobMenuLogoutContainer = document.querySelector(
  '.mob-menu-logout-container'
);
const mobMenuUserText = document.querySelector('.mob-menu-user-text');
//
// Header:
const headerHiddenAuthList = document.querySelector('.header-hidden-auth-list');
const headerLogoutBlock = document.querySelector('.header-logout-block');
const headerLoginOverlayBlock = document.querySelector(
  '.header-login-overlay-block'
);
const headerOverlayUserName = document.querySelector(
  '.header-overlay-user-name'
);
//
//
//
// RENDERING PAGE WHEN USER IS LOGGED IN :
function signInPageRender(userData) {
  const { name, email, photo, uid } = userData;
  //
  // Mobile menu:
  menuSignUpBtn.classList.add('visually-hidden');
  mobMenuUser.classList.remove('visually-hidden');
  mobMenuUserButtons.classList.remove('visually-hidden');
  mobMenuLogoutContainer.classList.remove('visually-hidden');
  mobMenuUserText.textContent = name;
  //
  // Header:
  headerHiddenAuthList.classList.remove('visually-hidden');
  headerLogoutBlock.classList.add('visually-hidden');
  headerLoginOverlayBlock.classList.remove('visually-hidden');
  headerOverlayUserName.textContent = name;
  //
  // Shopping list
  readUserShoppingList();
}
//
//
//
// RENDERING PAGE WHEN USER IS LOGGED OUT :
function signOutPageRender() {
  //
  // Mobile menu:
  menuSignUpBtn.classList.remove('visually-hidden');
  mobMenuUser.classList.add('visually-hidden');
  mobMenuUserButtons.classList.add('visually-hidden');
  mobMenuLogoutContainer.classList.add('visually-hidden');
  //
  // Header:
  headerHiddenAuthList.classList.add('visually-hidden');
  headerLogoutBlock.classList.remove('visually-hidden');
  headerLoginOverlayBlock.classList.add('visually-hidden');
  //
  // Shopping list
}
//
//
//
// EXPORT :
export { signInPageRender, signOutPageRender };
