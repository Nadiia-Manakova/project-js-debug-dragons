
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
import { getUserData, writeUserShoppingList } from './auth';
import amazonimg from '../amazon.png';
import applebookimg from '../apple-books.png';
import svg from '../img/icons-sprite.svg';
import './bookgallery';
import { getBooksId } from './request-base';


 
const bodyEl = document.querySelector('body'); 
const LOCAL_KEY = 'booklist';


const bookList = document.querySelector('.bookgallery')

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
        <use href="${svg}#x-close-btn"></use>
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
           <a href="${url}" target="_blank" class="">
           <img src="${amazonimg}" alt="" widht="62" height="19" class="modal-img-shop"/>
           </a>
          </li>
          <li class="modal-book-shops-item">
           <a href="${url2}" target="_blank" class="">
           <img src="${applebookimg}" alt="" widht="33" height="32" class="modal-img-shop-apple"/>
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

bookList.addEventListener('click', onClickOpenModalWindow)

function onClickOpenModalWindow(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('category-books__img')) {
    return;
  } 
  const bookEl = evt.target.closest('.modal-list'); 
  const id = bookEl.dataset.id;

  getBooksId(id).then(data => {
    const resp = data;
    renderPopUp(resp);
    

    if(!getUserData()) {
    btnAddEl.classList.add('hidden');
   btnRemoveEl.classList.add('hidden');
     textRemoveEl.classList.add('hidden');
    // console.log("render book");
    } else {
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
            
      removeFromCart(id)
      writeUserShoppingList(JSON.parse(localStorage.getItem(LOCAL_KEY)))
           
            btnAddEl.classList.remove('hidden');//показувати
            btnRemoveEl.classList.add('hidden');//не показувати
            textRemoveEl.classList.add('hidden');//не показувати
    })
      
      // const locallistarr = localStorage.getItem(LOCAL_KEY)
                
      btnAddEl.addEventListener('click', () => {
        
            setToLocalStorage(resp)
            writeUserShoppingList(JSON.parse(localStorage.getItem(LOCAL_KEY)))
      //  arr.push(JSON.parse(locallistarr))
        
      // console.log(arr);
        
            btnAddEl.classList.add('hidden');//не показувати
            btnRemoveEl.classList.remove('hidden');//показувати
            textRemoveEl.classList.remove('hidden')//показувати
          })
  }
   

  })

}
function removeFromCart(id) {
  const curentData = getFromLocalStorage();
  const updateData = curentData.filter(item => item._id !== id);

  addToLocalStorage(updateData);
  getFromLocalStorage();

  console.log('Товар удален из корзины');
}
function setToLocalStorage(obj) {
  const localArr = getFromLocalStorage();
  localArr.push(obj);
  addToLocalStorage(localArr);
}
function addToLocalStorage(arr) {
 
  localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
}

function getFromLocalStorage() {
  try {
    const data = localStorage.getItem(LOCAL_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

function checkBookInLocalStorage(id) {
  const curentList = getFromLocalStorage();
  return !curentList.every(obj => obj._id !== id);
}

