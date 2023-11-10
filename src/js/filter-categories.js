import axios from 'axios';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const refs = {
  list: document.querySelector('.categories__list'),
  galleryList: document.querySelector('.gallery'),
  galleryTitle: document.querySelector('.gallery__title'),
  categoryList: document.querySelector('.gallery__category-list'),
  categoriesTitle: document.querySelector('.categories__title'),
};

const http = {
  categoriesList: '/category-list',
  topBooks: '/top-books',
  category: '/category',
  id: '/id',
};

//! Render Category filter on load Home page
async function apiServise(q) {
  const response = await axios.get('' + q);
  return response;
}

function createCategoriesList(q) {
  apiServise(q).then(response => {
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
  refs.list.insertAdjacentHTML('beforeend', markup.join(''));
}
createCategoriesList(http.categoriesList);

//! Render Home Page Category list on filter click

refs.list.addEventListener('click', onCategoryClick);
function onCategoryClick(e) {
  checkClass(e);

  //refs.galleryList.innerHTML = '';

  const selectedCategory = e.target.textContent;
  let q = `/category?category=${selectedCategory}`;

  apiServise(q).then(data => {
    const selectedCategoryArr = data.data;
    createCategoryMarkup(selectedCategoryArr);
  });
}
export function createCategoryMarkup(arr) {
  const markup = arr
    .map(obj => {
      const { list_name } = obj;
      refs.galleryTitle.textContent = list_name;

      return renderBookCard(obj);
    })
    .join('');
  //refs.cardList.innerHTML = markup;
  refs.categoryList.innerHTML = markup;
  console.log('RENDER', markup); //! тут улетает разметка
}

//! Helper.
function checkClass(e) {
  if (e.target.tagName === 'LI') {
    const selectedElement = refs.list.querySelector('.selected-category');
    if (selectedElement) {
      selectedElement.classList.remove('selected-category');
    }

    e.target.classList.add('selected-category');
  }
  refs.categoriesTitle.style.color = 'var(--text-color)';
}

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  }
  return str;
}

const maxLength = 18;

//! render Book card
function renderBookCard(book) {
  const { book_image, author, title, _id } = book;

  // let cutedTitle = '';
  // let cutedAuthor = '';
  // if (title.length > 18) {
  //   cutedTitle = title.slice(0, 18) + '...';
  // } else {
  //   cutedTitle = title;
  // }

  // if (author.length > 18) {
  //   cutedAuthor = author.slice(0, 18) + '...';
  // } else {
  //   cutedAuthor = author;
  // }

  return `<li class="gallery__card-item" id ="${_id}" >
        <div class="gallery__image-box">
          <img class="gallery__card-image" src="${book_image}" alt="${title}" loading="lazy" width="180px"
          height="256px">
          <button class="gallery__card-quickviue js-modal-open" type="button" data-button="js-btn">
            QUICK VIEW
          </button>
        </div>
        <h3 class="gallery__card-title">${title}</h3>
        <p class="gallery__card-text">${author}</p>
      </li>`;
}
