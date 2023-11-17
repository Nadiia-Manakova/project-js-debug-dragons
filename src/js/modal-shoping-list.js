import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import './bookgallery';
import { getUserData, writeUserShoppingList } from './auth';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';
async function getBooksId(bookId) {
  const { data } = await axios(bookId);
  return data;
}
const bodyEl = document.querySelector('body');
const STORAGE_KEY = 'booklist';
const qwickViewBtn = document.querySelector('.bookgallery ');

export function renderPopUp(obj) {
  const {
    _id,
    book_image,
    author,
    title,
    description = 'No description...',
    buy_links: {
      0: { name, url },
      1: { name: name2, url: url2 },
    },
  } = obj;

  const instance = basicLightbox.create(
    `
 <div class="modal-book-js" data-id="${_id}">
        <button type="button" class="modal-book-btn-close">
        <svg class="icons-modal"  width="12" height="12">
        <use href="./img/icons-sprite.svg#x-close-btn"></use>
      </svg>
      </button>
        <img src="${book_image}" alt="${title}" class="modal-img-book widht="192" height="281"/>
        <div class="modal-list-infobook">
        <h3 class="modal-book-title">${title}</h3>
        <p class="modal-book-autor">${author}</p>
        <p class="modal-book-description">${description}</p>
        <div class="modal-list-shops">
        <ul class="modal-book-list-shops">
          <li class="modal-book-shops-item">
           <a href="3" target="_blank" class="">
           <img src="./amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/>
           </a>
          </li>
          <li class="modal-book-shops-item">
           <a href="3" target="_blank" class="">
           <img src="./apple-books.png" alt="" widht="33" height="32" class="modal-img-shop-apple"/>
           </a>
           </li>

          </div>
        </ul>
        </div>
        <button type="button" class="modal-book-btn hidden btn-add" id="add">
        add to shopping list</button>
        <button type="button" class="modal-book-btn hidden" id="remove">
        remove from the shopping list</button>
        <p class="txt-remove hidden">Сongratulations! You have added the book
        to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
  </div>`,
    {
      onShow: () => {
        document.addEventListener('keydown', escPress);
        bodyEl.style.overflow = 'hidden';
      },
      onClose: () => {
        document.removeEventListener('keydown', escPress);
        bodyEl.style.overflow = 'auto';
      },
    }
  );
  function escPress(evt) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
  }
  instance.show();

  const modalBtnClose = document.querySelector('.modal-book-btn-close');
  modalBtnClose.addEventListener('click', () => {
    instance.close();
  });
}

qwickViewBtn.addEventListener('click', onQuickViueBtnClick);
function onQuickViueBtnClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('category-books__img')) {
    return;
  }
  if (getUserData()) {
    console.log('Render modal');
  } else {
    alert('You need to log in first');
    return;
  }

  //   refs.backdropEl.classList.remove('is-hidden');
  //   document.body.classList.add('modal-open');

  const parent = e.target.closest('.list_five_books');

  const id = parent.dataset.id; //!тут получил ИД книги

  getBooksId(id).then(data => {
    const selectedBook = data;

    renderPopUp(selectedBook);
    const btnAddEl = document.querySelector('#add');
    const btnRemoveEl = document.querySelector('#remove');
    const textRemoveEl = document.querySelector('.txt-remove');

    if (checkBookInLocalStorage(id)) {
      btnRemoveEl.classList.remove('hidden');
      textRemoveEl.classList.remove('hidden');
    } else {
      btnAddEl.classList.remove('hidden');
    }
    btnRemoveEl.addEventListener('click', () => {
      removeFromCart(id);
      btnAddEl.classList.remove('hidden');
      btnRemoveEl.classList.add('hidden');
      textRemoveEl.classList.add('hidden');
      //textRemoveEl.classList.add('hidden');
    });

    //btnAddEl.classList.remove('hidden');
    btnAddEl.addEventListener('click', () => {
      setToLocalStorage(selectedBook);
      btnAddEl.classList.add('hidden');
      btnRemoveEl.classList.remove('hidden');
      textRemoveEl.classList.remove('hidden');
      //removeFromCart(id);
    });
  });
  //   http.id = id;

  //   apiServise(http.id).then(data => {
  //     const selectedBook = data.data;
  //     renderPopUp(selectedBook);

  //     refs.addToCartBtn.textContent = checkBookInLocalStorage(id)
  //       ? 'REMOVE FROM SHOPING LIST'
  //       : 'ADD TO SHOPING LIST';
  //     if (refs.addToCartBtn.textContent === 'REMOVE FROM SHOPING LIST') {
  //       refs.noteText.classList.remove('is-hidden');
  //     } else {
  //       refs.noteText.classList.add('is-hidden');
  //     }
  //   });
}

// !!!!!!!!! Local Storage

function removeFromCart(id) {
  const curentData = getFromLocalStorage();
  const updateData = curentData.filter(item => item._id !== id);

  addToLocalStorage(updateData);
  getFromLocalStorage();

  console.log('Товар удален из корзины');
}
function setToLocalStorage(obj) {
  //obj.added = false;
  //const localArr = Array.from(getFromLocalStorage());
  const localArr = getFromLocalStorage();
  localArr.push(obj);
  addToLocalStorage(localArr);
}
function addToLocalStorage(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function getFromLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

function checkBookInLocalStorage(id) {
  const curentList = getFromLocalStorage();
  return !curentList.every(obj => obj._id !== id);
}

