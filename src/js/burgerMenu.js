import { getTopBooks } from "./request-base";


const burgerMenuBtnEL = document.querySelector('.hamburger');
const menuContainerEl = document.querySelector('.hamburger-overlay');
const bodyEl = document.querySelector('body');
const mobileMenuGalleryListEl = document.querySelector('.mob-menu-gallery-list');

burgerMenuBtnEL.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
  burgerMenuBtnEL.classList.toggle('close');
  menuContainerEl.classList.toggle('active');

    bodyEl.classList.add('menu-open');
    if (bodyEl.classList.contains('menu-open')) {
        getTopBooks()
    .then(allCategories => {
         renderGallery(allCategories)    
    })
    .catch(error => {
    console.log(error);
    });
    } 
    
  document.body.classList.toggle('menu-open', menuContainerEl.classList.contains('active'));
}

function renderGallery(allCategories) {
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
};

function animateGallery(currentPosition, direction) {
    currentPosition += 0.3 * direction;

    const maxPosition = -8000;
    const minPosition = 0;

  if (currentPosition <= maxPosition || currentPosition >= minPosition) {
    direction *= -1;
    };

    mobileMenuGalleryListEl.style.transform = `translateX(${currentPosition}px)`;

    requestAnimationFrame(() => { animateGallery(currentPosition, direction) });
};

function runGallery() {
    animateGallery(0, -1);
};



//up btn


window.onscroll = function() {
	const scrollToTopBtn = document.getElementById("scrollTop");
    if (!scrollToTopBtn) {
    	scrollToTopBtn = document.createElement("a");
        scrollToTopBtn.id = "scrollTop";
        scrollToTopBtn.href = "#";
        document.body.appendChild(scrollToTopBtn);
	}
	scrollToTopBtn.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
    scrollToTopBtn.onclick = (evt) => {
    	evt.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};