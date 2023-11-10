 import axios from 'axios';
import * as basicLightbox from 'basiclightbox';


    axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';
   
  //Отримати масив категорі
//  async function getCategoriesList() {
//    const url = `${BASE_URL}top-books`;
//      const { data } = await axios('category?category=Paperback Nonfiction');
//       console.log(data);
//    return data
//    }
// getCategoriesList()
//   .then(data => {
//   listElement.insertAdjacentHTML('beforeend', renderBooks(data))
//   })

async function getBooksId(id) {
    // const url = `${BASE_URL}${bookId}`;
  const { data } = await axios(id);
    console.log(data);
    return data;
}


const listElement = document.querySelector('.list');//изменить
const bodyEl = document.querySelector('body');


 
const arr = [];

document.addEventListener('click', onClickOpenModalWindow)

function onClickOpenModalWindow(evt) {
  console.log(evt)
  

  if (!evt.target.closest('.users-list-item')) {
    return;
  }
  console.log(evt.target);
  evt.preventDefault();
  const bookEl = evt.target.closest('.users-list-item');
  const bookId = bookEl.dataset.id;
  console.log(bookId);
 
  getBooksId(bookId)
    .then(data => {
      console.log(arr);

      const { _id, author, book_image, title, description, buy_links } = data;
 const instance = basicLightbox.create(`
   <div class="modal-book-js" data-id="${_id}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="./images/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${book_image}" alt="${title}" class="modal-img-book widht=192 height=281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${title}</h1>
          <h2 class="modal-book-autor">${author}</h2>
          <p class="modal-book-description">${description}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li>Amazon</li>
            <li>Apple Books</li>
            <li>Barnes and Noble</li>
            <li>bookshop</li>
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

      // const btnAddShopList = document.querySelector('.modal-book-add-shoplist')
      // const btnRemoveList = document.querySelector('.modal-book-remove-shoplist')

      // btnAddShopList.addEventListener('click', onClickAddShoplist)
      const LOCAL_KEY = 'booklist';

      // function onClickAddShoplist() {
        
       arr.push(data);
        
      // localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
       
      // }

      //Кнопки видалення та додадавання книги в сховище
      const btnAddEl = document.querySelector('#add');
      const btnRemoveEl = document.querySelector('#remove');
      const textRemoveEl = document.querySelector('.txt-remove');
      
      getBooksId(bookId)
        .then(data => {
          const idBook = data.id;
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
            btnAddEl.classList.remove('hidden');
            btnRemoveEl.classList.add('hidden');
            textRemoveEl.classList.add('hidden');
          })
        }
        
      )
    
      
    })
 
  
  }
 

 

//Відмальовка біблотеки
// function renderBooks(data) {

//   return data.map(({ _id, book_image, title, author }) =>
//     `<li class="users-list-item" data-id="${_id}">
//         <img src="${book_image}" alt="${title}" width=300 height=450/>
//       <div>
//         <h2 class="title">${title}</h2>
//            <p>${author}</p>
//      </div>
//       </li>
//     `
//   ).join('')
  
// }
