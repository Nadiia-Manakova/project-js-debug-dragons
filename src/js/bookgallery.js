import Notiflix from 'notiflix';
import { getTopBooks, getTopCategory } from './request-base';

const listGeneral = document.querySelector('.list_general');

let n = 0;
let width = window.innerWidth;
if (width >= 1440) {
  n = 5;
} else if (width >= 720) {
  n = 3;
} else if (width >= 240) {
  n = 1;
}

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

function isClick() {
  let attributeValue = this.getAttribute('data-my-attribute');

  getTopCategory(attributeValue)
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

function bestSellers(allCategory) {
  window.scrollTo(0, 0);
  const markup = allCategory
    .map(category => {
      const booksMarkup = category.books
        .slice(0, n)
        .map(
          book => `
      <li class="list_five_books" data-id="${book._id}">
        <img src="${book.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${book.title}</h2>
        <p class="author_general">${book.author}</p>
      </li>
    `
        )
        .join('');

      return `
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${category.list_name}</p>
        <ul class="list_five_general">${booksMarkup}</ul>
        <button class="btn" data-my-attribute="${category.list_name}">LOAD MORE</button>
      </li></div>
    `;
    })
    .join('');
  listGeneral.insertAdjacentHTML('beforeend', markup);

  let buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', isClick);
  });
}

function markupCategory(catalogs) {
  window.scrollTo(0, 0);

  const markupLi = catalogs
    .map(
      image => `<li class="list_five_books">
        <img src="${image.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${image.title}</h2>
        <p class="text_general">${image.author}</p>
      </li>`
    )
    .join('');
  const markup = `<div class='div_category'><ul class="list_five_general">${markupLi}</ul>
  <button class="btn_back">BACK</button></div>`;
  listGeneral.insertAdjacentHTML('beforeend', markup);

  let btnBack = document.querySelector('.btn_back');
  btnBack.addEventListener('click', isClose);
}

function isClose() {
  location.reload();
}
