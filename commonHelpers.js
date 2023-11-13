import{g as B,a as v,b as M}from"./assets/burgerMenu-8147626e.js";import{N as L,a as E,b as N}from"./assets/vendor-542f1b53.js";const j=document.querySelector(".title_best_sellers"),u=document.querySelector(".list_general");let d=0,l=window.innerWidth;window.addEventListener("resize",W);function W(e){const t=e.target.outerWidth;(t>767&&l<768||t>1439&&l<1440||t<1440&&l>1439||t<768&&l>767)&&location.reload()}const I=()=>{l<768?d=1:l>=768&&l<1440?d=3:d=5};B().then(e=>{console.log(e),K(e)}).catch(e=>{L.Notify.failure("An error occurred while fetching images. Please try again.")});function O(){let e=this.getAttribute("data-my-attribute");v(e).then(t=>{j.style.display="none",u.innerHTML="",$(t)}).catch(t=>{L.Notify.failure("An error occurred while fetching images. Please try again.")})}function R(e){return e.books.slice(0,d).map(t=>{let o=w(t),s=S(t);return`
      <li class="list_five_books modal-list" data-id="${t._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>
        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function H(e){return e.map(t=>{const o=R(t);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${t.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function K(e){window.scrollTo(0,0);const t=H(e);u.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",O)})}function z(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function w(e){return e.title.length>16?e.title.substring(0,16)+"...":e.title}function S(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function P(e){return e.map(t=>{let o=w(t),s=S(t);return`<li class="list_five_books modal-list">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>
        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function Y(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function $(e){window.scrollTo(0,0);const t=P(e),o=z(e),s=Y(o,t);u.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",D)}function D(){location.reload()}I();const i={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(i.title);function J(e){M().then(t=>{const o=t.data;o.sort((s,r)=>s.list_name.localeCompare(r.list_name)),F(o)})}function F(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);i.filterListEl.insertAdjacentHTML("beforeend",t.join(""))}J();i.filterListEl.addEventListener("click",G);function G(e){U(e);const t=e.target.textContent;v(t).then(o=>{u.innerHTML="",$(o),i.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function U(e){if(e.target.tagName==="LI"){const t=i.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}i.categoriesTitle.style.color="var(--text-color)"}E.defaults.baseURL="https://books-backend.p.goit.global/books/";async function _(e){const{data:t}=await E(e);return console.log(t),t}document.querySelector(".list");const y=document.querySelector("body"),c=[];document.addEventListener("click",V);function V(e){if(console.log(e),!e.target.closest(".modal-list"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".modal-list").dataset.id;console.log(o),_(o).then(s=>{console.log(c);const{_id:r,author:C,book_image:q,title:p,description:A,buy_links:[{url:T},{url:x}]}=s,m=N.create(`
   <div class="modal-book-js" data-id="${r}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="./img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${q}" alt="${p}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${p}</h3>
          <p class="modal-book-autor">${C}</p>
          <p class="modal-book-description">${A}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li class="modal-book-shops-item">
             <a href="${T}" target="_blank" class="">
             <img src="./img/amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${x}" target="_blank" class="">
             <img src="./img/apple-books.png" alt="" widht="33" height="32" class="modal-img-shop"/> 
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",k),y.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",k),y.style.overflow="auto"}});function k(h){const b="Escape";h.code===b&&m.close()}m.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{m.close()});const f="booklist";c.push(s);const a=document.querySelector("#add"),n=document.querySelector("#remove"),g=document.querySelector(".txt-remove");_(o).then(h=>{const b=h.id;localStorage.getItem({idBook:b})!==null?(a.classList.add("hidden"),n.classList.remove("hidden")):(a.classList.remove("hidden"),n.classList.add("hidden"),g.classList.add("hidden")),a.addEventListener("click",()=>{localStorage.setItem(f,JSON.stringify(c)),a.classList.add("hidden"),n.classList.remove("hidden"),g.classList.remove("hidden")}),n.addEventListener("click",()=>{localStorage.removeItem(f,JSON.stringify(c)),a.classList.remove("hidden"),n.classList.add("hidden"),g.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
