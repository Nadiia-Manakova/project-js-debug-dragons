import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import { getCategoryList, getTopCategory } from './request-base';
import { markupCategory, listGeneral } from './bookgallery.js';

const refs = {
  filterListEl: document.querySelector('.categories__list'),
  categoriesTitle: document.querySelector('.categories__title'),
};

//! Render Category filter on load Home page
function createCategoriesList(q) {
  getCategoryList(q).then(response => {
    const list = response.data;
    list.sort((firstItem, secondItem) =>
      firstItem.list_name.localeCompare(secondItem.list_name)
    );

    createFilterCategoriesMarkup(list);
  });
}

function createFilterCategoriesMarkup(arr) {
  const markup = arr.map(item => {
    return `<li class="categories__list-item">${item.list_name}</li>`;
  });
  refs.filterListEl.insertAdjacentHTML('beforeend', markup.join(''));
}
createCategoriesList('category-list');

//! Return  name of selected category  on filter click
refs.filterListEl.addEventListener('click', onCategoryClick);

export function onCategoryClick(e) {
  checkClass(e);

  const selectedCategory = e.target.textContent;

  console.log(selectedCategory);

  getTopCategory(selectedCategory)
    .then(catalogs => {
      listGeneral.innerHTML = '';
      markupCategory(catalogs);
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'An error occurred while fetching images. Please try again.'
      );
    });
}

//! helper
function checkClass(e) {
  if (e.target.tagName === 'LI') {
    const selectedElement =
      refs.filterListEl.querySelector('.selected-category');
    if (selectedElement) {
      selectedElement.classList.remove('selected-category');
    }

    e.target.classList.add('selected-category');
  }
  refs.categoriesTitle.style.color = 'var(--text-color)';
}
