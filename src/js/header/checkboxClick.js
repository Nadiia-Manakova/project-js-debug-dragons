import { burgerChangeColor } from '../burgerMenu';
import { headeRrefs } from './headerConst';

export function onCheckboxClick() {
  // console.log(refs.checkbox.checked);
  if (headeRrefs.checkbox.checked === true) {
    localStorage.setItem(headeRrefs.THEME_KEY, headeRrefs.themeValueDark);
    headeRrefs.body.classList.add('dark-theme');
    headeRrefs.body.classList.remove('light-theme');
    burgerChangeColor();
  }
  if (headeRrefs.checkbox.checked === false) {
    localStorage.setItem(headeRrefs.THEME_KEY, headeRrefs.themeValueLight);
    headeRrefs.body.classList.add('light-theme');
    headeRrefs.body.classList.remove('dark-theme');
    burgerChangeColor();
  }
}
export function checkLocalTheme() {
  if (
    localStorage.getItem(headeRrefs.THEME_KEY) === headeRrefs.themeValueDark
  ) {
    headeRrefs.checkbox.checked = true;
    headeRrefs.body.classList.add('dark-theme');
    headeRrefs.body.classList.remove('light-theme');
    burgerChangeColor();

  } else {
    headeRrefs.checkbox.checked = false;
    headeRrefs.body.classList.add('light-theme');
    headeRrefs.body.classList.remove('dark-theme');
    burgerChangeColor();

  }
}
