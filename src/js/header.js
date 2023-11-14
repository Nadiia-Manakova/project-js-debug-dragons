import { checkLocalTheme, onCheckboxClick } from './header/checkboxClick';
import { headeRrefs } from './header/headerConst';
import { setCurrentPageName } from './header/setCurrentPageName';

setCurrentPageName();

checkLocalTheme();

headeRrefs.checkbox.addEventListener('click', onCheckboxClick);
