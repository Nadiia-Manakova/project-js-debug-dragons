import { headeRrefs } from './headerConst';

export function onCheckboxClick() {
  // console.log(refs.checkbox.checked);
  if (headeRrefs.checkbox.checked === true) {
    localStorage.setItem(headeRrefs.THEME_KEY, headeRrefs.themeValueDark);
    headeRrefs.body.classList.add('dark-theme');
  }
  if (headeRrefs.checkbox.checked === false) {
    localStorage.getItem(headeRrefs.THEME_KEY, headeRrefs.themeValueDark);
    headeRrefs.body.classList.add('dark-theme');
  }
}
