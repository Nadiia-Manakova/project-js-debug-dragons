import{g as N,a as v,s as L,h as E,b as j,c as R,w as I}from"./assets/burgerMenu-7b09600d.js";import{N as w,a as S,b as W}from"./assets/vendor-3361d7a0.js";const g=document.querySelector(".list_general"),O=document.querySelector(".title_best_sellers");let m=0,i=window.innerWidth;window.addEventListener("resize",H);function H(e){const t=e.target.outerWidth;(t>767&&i<768||t>1439&&i<1440||t<1440&&i>1439||t<768&&i>767)&&location.reload()}const K=()=>{i<768?m=1:i>=768&&i<1440?m=3:m=5};N().then(e=>{console.log(e),Y(e)}).catch(e=>{w.Notify.failure("An error occurred while fetching images. Please try again.")});function z(){let e=this.getAttribute("data-my-attribute");console.log(e),P(e),v(e).then(t=>{O.style.display="none",g.innerHTML="",C(t)}).catch(t=>{w.Notify.failure("An error occurred while fetching images. Please try again.")})}function P(e){const t=document.querySelector(".categories__title"),s=document.querySelector(".categories__list").getElementsByTagName("li"),d=Array.from(s).find(h=>h.textContent.trim()===e);d&&(d.classList.add("selected-category"),t.style.color="var(--text-color)")}function D(e){return e.books.slice(0,m).map(t=>{let o=$(t),s=A(t);return`

      <li class="list_five_books modal-list" data-id="${t._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function U(e){return e.map(t=>{const o=D(t);return`
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${t.list_name}</p>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function Y(e){window.scrollTo(0,0);const t=U(e);g.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",z)})}function J(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function $(e){return e.title.length>16?e.title.substring(0,16)+"...":e.title}function A(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function F(e){return e.map(t=>{let o=$(t),s=A(t);return`<li class="list_five_books modal-list">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function G(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function C(e){window.scrollTo(0,0);const t=F(e),o=J(e),s=G(o,t);g.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",V)}function V(){location.reload()}K();const c={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};L();function Q(e){j().then(t=>{const o=t.data;o.sort((s,r)=>s.list_name.localeCompare(r.list_name)),X(o)})}function X(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);c.filterListEl.insertAdjacentHTML("beforeend",t.join("")),E()}Q();c.filterListEl.addEventListener("click",Z);function Z(e){ee(e),L();const t=e.target.textContent;v(t).then(o=>{g.innerHTML="",C(o),E(),c.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function ee(e){if(e.target.tagName==="LI"){const t=c.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}c.categoriesTitle.style.color="var(--text-color)"}S.defaults.baseURL="https://books-backend.p.goit.global/books/";async function _(e){const{data:t}=await S(e);return console.log(t),t}const y=document.querySelector("body"),n=[];document.addEventListener("click",te);function te(e){if(console.log(e),!e.target.closest(".modal-list"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".modal-list").dataset.id;console.log(o),_(o).then(s=>{console.log(n);const{_id:r,author:d,book_image:h,title:f,description:q,buy_links:[{url:x},{url:T}]}=s,b=W.create(`
   <div class="modal-book-js" data-id="${r}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="./img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${h}" alt="${f}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${f}</h3>
          <p class="modal-book-autor">${d}</p>
          <p class="modal-book-description">${q}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li class="modal-book-shops-item">
             <a href="${x}" target="_blank" class="">
             <img src="./img/amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${T}" target="_blank" class="">
             <img src="./img/apple-books.png" alt="" widht="33" height="32" class="modal-img-shop-apple"/> 
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",k),y.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",k),y.style.overflow="auto"}});function k(u){const l="Escape";u.code===l&&b.close()}if(b.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{b.close()}),!R())btnAddEl.classList.add("hidden"),btnRemoveEl.classList.add("hidden"),textRemoveEl.classList.add("hidden");else{const u="booklist";n.push(s),I(n),console.log(n);const l=document.querySelector("#add"),a=document.querySelector("#remove"),p=document.querySelector(".txt-remove");_(o).then(B=>{const M=B.id;localStorage.getItem({idBook:M})!==null?(l.classList.add("hidden"),a.classList.remove("hidden")):(l.classList.remove("hidden"),a.classList.add("hidden"),p.classList.add("hidden")),l.addEventListener("click",()=>{localStorage.setItem(u,JSON.stringify(n)),l.classList.add("hidden"),a.classList.remove("hidden"),p.classList.remove("hidden")}),a.addEventListener("click",()=>{localStorage.removeItem(u,JSON.stringify(n)),l.classList.remove("hidden"),a.classList.add("hidden"),p.classList.add("hidden")})})}})}
//# sourceMappingURL=commonHelpers.js.map
