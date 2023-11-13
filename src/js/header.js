import { onCheckboxClick } from './header/checkboxClick';
import { headeRrefs } from './header/headerConst';
import { setCurrentPageName } from './header/setCurrentPageName';

headeRrefs.checkbox.addEventListener('click', onCheckboxClick);
// function toggleModal() {
//   elements.modal.classList.toggle('auth-backdrop-hidden');
// }

// headeRrefs.headerLoginBtn.addEventListener('click', toggleModal);

// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem(headeRrefs.THEME_KEY);
//   if (savedTheme === 'dark-theme') {
//     document.documentElement.classList.add('dark-theme');
//     headeRrefs.checkbox.checked = true;
//   }
// });

setCurrentPageName();
