import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const LOCAL_KEY = "booklist";
const cartList = document.querySelector(".cart-list");
const emptyCart = document.querySelector(".empty-cart");
const container = document.querySelector("#pagination");


const options = {
    totalItems: 500,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
}

let pagination = new Pagination(container, options);


let data = [];

document.addEventListener("click", handlerDeleteCart);


    try {
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        if (!data.length) {
            emptyCart.style.display = "block";
            //return;
        }
        emptyCart.style.display = "none";
        cartList.innerHTML = createCartMurkup(data);
        if (data.length > itemPerPage) {
        }
  } catch (error) {
    console.error("Get state error: ", error.message);
  }




// ----------------------------------------------------------------------------------------РОЗМІТКА



function createCartMurkup(arr) {
    return arr.map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
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
    if (!e.target.classList.contains("cart-item-delete")) return;
   
    const idOfBook = e.target.closest(".cart-item").dataset.id;
    try {
        const products = data.filter(({ _id }) => _id !== idOfBook);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        cartList.innerHTML = createCartMurkup(products);
  } catch (error) {
    console.error("Get state error: ", error.message);
    }
    if (!data.length) {
    emptyCart.style.display = "block";
}
}