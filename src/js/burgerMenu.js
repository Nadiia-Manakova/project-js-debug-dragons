import { getTopBooks } from "./request-base";
import { headeRrefs } from './header/headerConst';

const burgerMenuBtnEL = document.querySelector('.hamburger');
const menuContainerEl = document.querySelector('.hamburger-overlay');
const bodyEl = document.querySelector('body');
const mobileMenuGalleryListEl = document.querySelector('.mob-menu-gallery-list');
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const burgerLineTopEl = document.querySelector('.line-top');
const burgerLineMiddleEl = document.querySelector('.line-middle');
const burgerlineBottomEl = document.querySelector('.line-bottom');

burgerMenuBtnEL.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
  burgerMenuBtnEL.classList.toggle('close');
  menuContainerEl.classList.toggle('active');
  
  bodyEl.classList.add('menu-open');  
  document.body.classList.toggle('menu-open', menuContainerEl.classList.contains('active'));
}

getTopBooks()
    .then(allCategories => {
        const allBooks = allCategories.reduce((acc, category) => {
            return acc.concat(category.books);
        }, []);

        const uniqueBooks = allBooks.filter((currentBook, index, array) => {
            const filteredBooks = array.findIndex((book) => book.title === currentBook.title) === index;
            return filteredBooks;
        });

        const mobMenuMarkup = uniqueBooks.map((book) => `
<li class="mob-menu-gallery-item">
    <img loading="lazy" class="mob-menu-image" src="${book.book_image}" alt="${book.title}" >
</li>`).join("");

        mobileMenuGalleryListEl.insertAdjacentHTML('afterbegin', mobMenuMarkup);
        runGallery();
    })
    .catch(error => {
        console.log(error);
    });


function runGallery() {
    animateGallery(0, -1);
};    

function animateGallery(currentPosition, direction) {
    currentPosition += 0.3 * direction;

    const maxPosition = -1500;
    const minPosition = 0;

    if (currentPosition <= maxPosition || currentPosition >= minPosition) {
        direction *= -1;
    }

    mobileMenuGalleryListEl.style.transform = `translateX(${currentPosition}px)`;

    requestAnimationFrame(() => animateGallery(currentPosition, direction));
}

/**
  |============================
  | scroll to top btn
  |============================
*/

// console.log(window.location)

if (window.location.pathname === "/index.html") {
  window.addEventListener("scroll", onScrollWindow);
  
  function onScrollWindow() {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }

  scrollToTopBtn.onclick = (evt) => {
    evt.preventDefault();
    document.documentElement.scrollTop = 0;
  };
}
};



/**
  |============================
  | burger change color
  |============================
*/

export function burgerChangeColor() {
  if (headeRrefs.body.classList.contains('dark-theme')) {
    burgerLineTopEl.classList.replace('burger-line-color-dark','burger-line-color-light')
    burgerLineMiddleEl.classList.replace('burger-line-color-dark','burger-line-color-light')
    burgerlineBottomEl.classList.replace('burger-line-color-dark','burger-line-color-light')
   
  } else {
    burgerLineTopEl.classList.replace('burger-line-color-light', 'burger-line-color-dark');
    burgerLineMiddleEl.classList.replace('burger-line-color-light', 'burger-line-color-dark');
    burgerlineBottomEl.classList.replace('burger-line-color-light', 'burger-line-color-dark');

  };
};






