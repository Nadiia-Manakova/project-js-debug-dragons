import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

const LOCAL_KEY = "booklist";
const container = document.querySelector("#pagination");
const cartList = document.querySelector(".cart-list");
const emptyCart = document.querySelector(".empty-cart");

const windowInnerWidth = window.innerWidth;

let itemPerPage = 4;
let visiblePage = 2;

if (windowInnerWidth > 768) {
    itemPerPage = 3;
    visiblePage = 3;
}

emptyCart.style.display = "none";

let data = [];

try {
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        if (!data.length) {
            emptyCart.style.display = "block";
        } 
    if (data.length <=itemPerPage) {
            container.style.display = "none";
        } 
            cartList.innerHTML = createCartMurkup(data, 1);
        
  } catch (error) {
    console.error("Get state error: ", error.message);
  }

const options = {
    totalItems: data.length,
    itemsPerPage: itemPerPage,
    visiblePages: visiblePage,
    page: 1,
    centerAlign: false,
    template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
}

let pagination = new Pagination(container, options);



document.addEventListener("click", handlerDeleteCart);


pagination.on('afterMove', (event) => {
    let currentPage = event.page;
     cartList.innerHTML = createCartMurkup(data, currentPage);
});









// ----------------------------------------------------------------------------------------РОЗМІТКА

function createCartMurkup(arr, currentPage) {
    cartList.innerHTML = "";
    const start = itemPerPage * (currentPage-1);
    const end = start + itemPerPage;
    const paginatedData = arr.slice(start, end);
    return paginatedData.map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
        ` <li class="cart-item" data-id ="${_id}">
            <img src="${book_image}" alt="${title}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${title}</h3>
                <p class="cart-item-category cart-item-label">${list_name}</p>
            </div>
                <p class="cart-item-description">${description}</p>
                <p class="cart-item-author cart-item-label">${author}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${amazon}" class="cart-item-link">amazon</a></li>
                <li><a href="${appleBook}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("");
}


// ----------------------------------------------------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ КОРЗИНИ


function handlerDeleteCart(e) {
    if (!e.target.closest(".cart-item-delete")) return;
   
    const idOfBook = e.target.closest(".cart-item").dataset.id;
    try {
        const indexToDelete = data.findIndex(({ _id }) => _id === idOfBook);
        const oldPage = Math.floor(indexToDelete / itemPerPage + 1);
        const products = data.filter(({ _id }) => _id !== idOfBook);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        const pageCount = Math.floor((products.length - 1) / itemPerPage + 1);
        pagination.setTotalItems(products.length);
        pagination.reset(products.length);
        pagination.movePageTo(oldPage > pageCount ? pageCount : oldPage);

        if (data.length <=itemPerPage) {
            container.style.display = "none";
        } 
        let currentPage = pagination.getCurrentPage();
       
        cartList.innerHTML = createCartMurkup(data, currentPage);
  } catch (error) {
    console.error("Get state error: ", error.message);
    }
    if (!data.length) {
    emptyCart.style.display = "block";
}
}






