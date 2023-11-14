import Notiflix from 'notiflix';
import { getTopBooks, getTopCategory } from './request-base';
import { refs } from './filter-categories';
import { showLoader, hideLoader } from './loader.js';

export const listGeneral = document.querySelector('.list_general');
const titleBestSellers = document.querySelector('.title_best_sellers');



let n = 0;

let currentWidth = window.innerWidth;

window.addEventListener('resize', handleWindowResize);

function handleWindowResize(event) {
  const width = event.target.outerWidth;
//console.log(width)
  if (
    (width > 767 && currentWidth < 768) ||
    (width > 1439 && currentWidth < 1440) ||
    (width < 1440 && currentWidth > 1439) ||
    (width < 768 && currentWidth > 767)
  ) {
    location.reload();
  }
}

const currentWindowWidth = () => {
  if (currentWidth < 768) {
    n = 1;
  } else if (currentWidth >= 768 && currentWidth < 1440) {
    n = 3;
  } else {
    n = 5;
  }
};


getTopBooks()
  .then(allCategory => {
    console.log(allCategory);
    bestSellers(allCategory);
    
  })
  .catch(error => {
    Notiflix.Notify.failure(
      'An error occurred while fetching images. Please try again.'
    );
  });
  

function isClick() {showLoader();
  let attributeValue = this.getAttribute('data-my-attribute');
  console.log(attributeValue);

  setActiveListItem(attributeValue)

  getTopCategory(attributeValue)
    .then(catalogs => {
      titleBestSellers.style.display = 'none';
      listGeneral.innerHTML = '';
      markupCategory(catalogs);
      
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'An error occurred while fetching images. Please try again.'
      );
    });
}

function setActiveListItem(str) {
  const title = document.querySelector('.categories__title');
  const ulElement = document.querySelector('.categories__list');
  const liElements = ulElement.getElementsByTagName('li');
  const liArray = Array.from(liElements);
  const targetLi = liArray.find(li => li.textContent.trim() === str);
  if (targetLi) {
    targetLi.classList.add('selected-category');
    title.style.color = 'var(--text-color)';
  }
}


function getBooksMarkup(category) {
  return category.books
    .slice(0, n)
    .map(book => {
      let shortTitle = shortTitleBooks(book);
      let shortAutor = shortAutorBooks(book);
      return `

      <li class="list_five_books modal-list" data-id="${book._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${book.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${shortTitle}</h3>
        <p class="author_general">${shortAutor}</p>
      </li>
    `;
    })
    .join('');
}

function getMarkupAll(allCategory) {
  return allCategory
    .map(category => {
      const booksMarkup = getBooksMarkup(category);
      return `
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${category.list_name}</h2>
        <ul class="list_five_general">${booksMarkup}</ul>
        <button class="btn" data-my-attribute="${category.list_name}">SEE MORE</button>
      </li></div>
    `;
    })
    .join('');
  
}

function bestSellers(allCategory) {
  window.scrollTo(0, 0);
  const markupAll = getMarkupAll(allCategory);
  listGeneral.insertAdjacentHTML('beforeend', markupAll);

  let buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', isClick);
  });
}

function getListName(catalogs) {
  return catalogs.slice(0, 1).map(image =>
    image.list_name
      .split(' ')
      .map(word => `<span>${word}</span>`)
      .join(' ')
  );
}

function shortTitleBooks(book) {
  return book.title.length > 16
    ? book.title.substring(0, 16) + '...'
    : book.title;
}

function shortAutorBooks(book) {
  return book.author.length > 25
    ? book.author.substring(0, 20) + '...'
    : book.author;
}

function getmarkupLi(catalogs) {
  return catalogs
    .map(book => {
      let shortTitle = shortTitleBooks(book);
      let shortAutor = shortAutorBooks(book);


      return `<li class="list_five_books modal-list" data-id="${book._id}">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${book.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${shortTitle}</h3>
        <p class="text_general">${shortAutor}</p>
        <h1 hidden>${book.list_name}</h1>
      </li>`;
    })
    .join('');
}

function getMarkup(listNames, markupLi) {
  return `<div class='div_category'><h1 class="title-category">${listNames}</h1></><ul class="list_five_general">${markupLi}</ul>
  <button class="btn_back">BACK</button></div>`;
}

export function markupCategory(catalogs) {
  window.scrollTo(0, 0);

  const markupLi = getmarkupLi(catalogs);

  const listNames = getListName(catalogs);

  const markup = getMarkup(listNames, markupLi);

  listGeneral.insertAdjacentHTML('beforeend', markup);
hideLoader();
  let btnBack = document.querySelector('.btn_back');
  btnBack.addEventListener('click', isClose);
}

function isClose() {
  location.reload();
}
currentWindowWidth();
