import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

import { getCategoryList, getTopCategory } from './request-base';

import { markupCategory, listGeneral } from './bookgallery.js';

export async function getCategoryList() {
  const url = `${BASE_URL}category-list`;
  const response = await axios.get(url);

  return response;
}
const refs = {
  galleryTitle: document.querySelector('.list_general-title'),
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
  //let q = `/category?category=${selectedCategory}`;
  console.log(selectedCategory);
  refs.galleryTitle.textContent = selectedCategory;

  // return apiServise(q).then(data => {
  //   const selectedCategoryName = data.data[0].list_name;
  //   console.log(selectedCategoryName);
  //   return selectedCategoryName;
  // });
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
  //return selectedCategory;
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
