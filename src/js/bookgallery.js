import Notiflix from 'notiflix';
import { getTopBooks, getTopCategory } from './request-base';

export const listGeneral = document.querySelector('.list_general');
<<<<<<< Updated upstream
export const titleBestSellers = document.querySelector(".title_best_sellers")
=======
export const titleBestSellers = document.querySelector('.title_best_sellers');
>>>>>>> Stashed changes

let n = 0;
let width = window.innerWidth;
if (width >= 1240) {
    n = 5;
} else if (width >= 720) {
    n = 3;
} else if (width >= 240) {
    n = 1;
}



getTopBooks().then(allCategory => {
  console.log(allCategory)
  bestSellers(allCategory);
}).catch(error => { 
  Notiflix.Notify.failure('An error occurred while fetching images. Please try again.');

});

function isClick() {
  let attributeValue = this.getAttribute('data-my-attribute');
  
  getTopCategory(attributeValue)
    .then(catalogs => {
      titleBestSellers.style.display = "none";
      listGeneral.innerHTML = '';
      markupCategory(catalogs);  
    })
    .catch(error => {
      Notiflix.Notify.failure('An error occurred while fetching images. Please try again.');

  
      
    });
};





function getBooksMarkup(category) { 
  return category.books.slice(0, n).map((book) => {
    let shortTitle = shortTitleBooks(book);
    let shortAutor = shortAutorBooks(book);
    return `
      <li class="list_five_books" data-id="${book._id}">
        <img src="${book.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${shortTitle}</h2>
        <p class="author_general">${shortAutor}</p>
      </li>
    `;
  }).join("");
}



function getMarkupAll(allCategory) { 
  return allCategory.map((category) => {
    const booksMarkup = getBooksMarkup(category)
    return `
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${category.list_name}</p>
        <ul class="list_five_general">${booksMarkup}</ul>
        <button class="btn" data-my-attribute="${category.list_name}">SEE MORE</button>
      </li></div>
    `;
  }).join("");
}


function bestSellers(allCategory) { 
  window.scrollTo(0, 0);
  const markupAll = getMarkupAll(allCategory);
listGeneral.insertAdjacentHTML("beforeend", markupAll);

let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener("click", isClick)  
});  
}

function getListName(catalogs) {
return catalogs.slice(0, 1).map((image) => (image.list_name).split(" ").map(word => `<span>${word}</span>`).join(" "));
}

function shortTitleBooks(book) { 
  return book.title.length > 17 ? book.title.substring(0, 17) + "..." : book.title;
}

function shortAutorBooks(book) { 
  return book.author.length > 25 ? book.author.substring(0, 25) + "..." : book.author;
}



function getmarkupLi(catalogs) { 
  return catalogs.map((book) => {
    let shortTitle = shortTitleBooks(book);
    let shortAutor = shortAutorBooks(book);
 
  return `<li class="list_five_books">
        <img src="${book.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${shortTitle}</h2>
        <p class="text_general">${shortAutor}</p>
        <h1 hidden>${book.list_name}</h1>
      </li>`}).join("");
}


function getMarkup(listNames, markupLi) { 
  return `<div class='div_category'><h1 class="title-category">${listNames}</h1></><ul class="list_five_general">${markupLi}</ul>
  <button class="btn_back">BACK</button></div>`
}


export function markupCategory(catalogs) { 
  window.scrollTo(0, 0);

  const markupLi = getmarkupLi(catalogs);
    
  const listNames = getListName(catalogs);

  const markup = getMarkup(listNames, markupLi);

  listGeneral.insertAdjacentHTML("beforeend", markup);
  
let btnBack = document.querySelector(".btn_back");
  btnBack.addEventListener("click", isClose)
}

  function isClose() { 
    location.reload();
    
}

