 import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
import { getUserData, writeUserShoppingList } from './auth';


    axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';
   

async function getBooksId(bookId) {
    // const url = `${BASE_URL}${bookId}`;
  const { data } = await axios(bookId);
    console.log(data);
    return data;
}

// const listElement = document.querySelector('.modal-list');
const bodyEl = document.querySelector('body');

 
const arr = [];

document.addEventListener('click', onClickOpenModalWindow)

function onClickOpenModalWindow(evt) {
  console.log(evt)
  
  if (!evt.target.closest('.modal-list')) {
    return;
  }
  console.log(evt.target);
  evt.preventDefault();
  const bookEl = evt.target.closest('.modal-list'); 
  const bookId = bookEl.dataset.id;
  console.log(bookId);
 
  getBooksId(bookId)
    .then(data => {
      console.log(arr);

    
      const { _id, author, book_image, title, description, buy_links: [{ url: amazon }, { url: appleBook }] } = data;
      const instance = basicLightbox.create(`
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
             <a href="${amazon}" target="_blank" class="">
             <img src="./amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${appleBook}" target="_blank" class="">
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
    </div>`
    ,
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
  
)

function escPress(evt) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = evt.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
}
        instance.show()

        const modalBtnClose = document.querySelector('.modal-book-btn-close')
        modalBtnClose.addEventListener('click', () => {
        instance.close()
        })

      // const btnAddShopList = document.querySelector('.modal-book-add-shoplist')
      // const btnRemoveList = document.querySelector('.modal-book-remove-shoplist')

      // btnAddShopList.addEventListener('click', onClickAddShoplist)
      
      // function onClickAddShoplist() {
        // const LOCAL_KEY = 'booklist';
        // arr.push(data);
        
      // localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
       
      // }

     
      const btnAddEl = document.querySelector('#add');
      const btnRemoveEl = document.querySelector('#remove');
      const textRemoveEl = document.querySelector('.txt-remove');
      
      
  if (!getUserData()) {
   btnAddEl.classList.add('hidden');
   btnRemoveEl.classList.add('hidden');
   textRemoveEl.classList.add('hidden');
 }else{
  const LOCAL_KEY = 'booklist';
    arr.push(data);
    writeUserShoppingList(arr);
    console.log(arr);
    
      // const btnAddEl = document.querySelector('#add');
      // const btnRemoveEl = document.querySelector('#remove');
      // const textRemoveEl = document.querySelector('.txt-remove');
      getBooksId(bookId)
        .then(data => {
          const idBook = data.id;
           //Кнопки видалення та додадавання книги в сховище
          if (localStorage.getItem({ idBook }) !== null) {
            btnAddEl.classList.add('hidden');
            btnRemoveEl.classList.remove('hidden');
          } else {
            btnAddEl.classList.remove('hidden');
            btnRemoveEl.classList.add('hidden');
            textRemoveEl.classList.add('hidden');
          }
          btnAddEl.addEventListener('click', () => {
           localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
            btnAddEl.classList.add('hidden');
            btnRemoveEl.classList.remove('hidden');
            textRemoveEl.classList.remove('hidden')
          })

          btnRemoveEl.addEventListener('click', () => {
            localStorage.removeItem(LOCAL_KEY, JSON.stringify(arr));
             writeUserShoppingList(arr);
            btnAddEl.classList.remove('hidden');
            btnRemoveEl.classList.add('hidden');
            textRemoveEl.classList.add('hidden');
          })
        })
    
 }

        }
        
      )
    
    
  }
 
