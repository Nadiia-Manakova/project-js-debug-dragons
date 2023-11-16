import { checkLocalTheme, onCheckboxClick } from './header/checkboxClick';
import { headeRrefs } from './header/headerConst';
import { setCurrentPageName, setCurrentPageNameModal } from './header/setCurrentPageName';

setCurrentPageName();
setCurrentPageNameModal();

checkLocalTheme();

headeRrefs.checkbox.addEventListener('click', onCheckboxClick);
