import{g as T,s as b,a as y,h as p,b as x,c as N,w as _,d as B,e as M,f as I}from"./assets/icons-sprite-73ac8445.js";import{N as v,a as L,b as j}from"./assets/vendor-23f73890.js";const g=document.querySelector(".list_general"),O=document.querySelector(".title_best_sellers");let d=0,n=window.innerWidth;window.addEventListener("resize",R);function R(t){const e=t.target.outerWidth;(e>767&&n<768||e>1439&&n<1440||e<1440&&n>1439||e<768&&n>767)&&location.reload()}const W=()=>{n<768?d=1:n>=768&&n<1440?d=3:d=5};T().then(t=>{console.log(t),J(t)}).catch(t=>{v.Notify.failure("An error occurred while fetching images. Please try again.")});function D(){b();let t=this.getAttribute("data-my-attribute");console.log(t),H(t),y(t).then(e=>{O.style.display="none",g.innerHTML="",w(e)}).catch(e=>{v.Notify.failure("An error occurred while fetching images. Please try again.")})}function H(t){const e=document.querySelector(".categories__title"),s=document.querySelector(".categories__list").getElementsByTagName("li"),i=Array.from(s).find(a=>a.textContent.trim()===t);i&&(i.classList.add("selected-category"),e.style.color="var(--text-color)")}function K(t){return t.books.slice(0,d).map(e=>{let o=E(e),s=S(e);return`

      <li class="list_five_books modal-list" data-id="${e._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${e.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function P(t){return t.map(e=>{const o=K(e);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${e.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${e.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function J(t){window.scrollTo(0,0);const e=P(t);g.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",D)})}function U(t){return t.slice(0,1).map(e=>e.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function E(t){return t.title.length>16?t.title.substring(0,16)+"...":t.title}function S(t){return t.author.length>25?t.author.substring(0,20)+"...":t.author}function z(t){return t.map(e=>{let o=E(e),s=S(e);return`<li class="list_five_books modal-list" data-id="${e._id}">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${e.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${o}</h3>
        <p class="text_general">${s}</p>
        <h1 hidden>${e.list_name}</h1>
      </li>`}).join("")}function F(t,e){return`<div class='div_category'><h1 class="title-category">${t}</h1></><ul class="list_five_general">${e}</ul>
  <button class="btn_back">BACK</button></div>`}function w(t){window.scrollTo(0,0);const e=z(t),o=U(t),s=F(o,e);g.insertAdjacentHTML("beforeend",s),p(),document.querySelector(".btn_back").addEventListener("click",Y)}function Y(){location.reload()}W();const c={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};b();function G(t){x().then(e=>{const o=e.data;o.sort((s,l)=>s.list_name.localeCompare(l.list_name)),V(o)})}function V(t){const e=t.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);c.filterListEl.insertAdjacentHTML("beforeend",e.join("")),p()}G();c.filterListEl.addEventListener("click",Q);function Q(t){X(t),b();const e=t.target.textContent;y(e).then(o=>{g.innerHTML="",w(o),p(),c.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function X(t){if(t.target.tagName==="LI"){const e=c.filterListEl.querySelector(".selected-category");e&&e.classList.remove("selected-category"),t.target.classList.add("selected-category")}c.categoriesTitle.style.color="var(--text-color)"}L.defaults.baseURL="https://books-backend.p.goit.global/books/";async function Z(t){const{data:e}=await L(t);return console.log(e),e}const k=document.querySelector("body"),u="booklist",tt=document.querySelector(".bookgallery");function et(t){const{_id:e,book_image:o,author:s,title:l,description:i="No description...",buy_links:{0:{name:a,url:r},1:{name:at,url:A}}}=t,h=j.create(`
 <div class="modal-book-js" data-id="${e}">
      <button type="button" class="modal-book-btn-close">
      <svg class="icons-modal"  width="12" height="12">
        <use href="${B}#x-close-btn"></use>
      </svg>
      </button>
        <img src="${o}" alt="${l}" class="modal-img-book widht="192" height="281"/>
        <div class="modal-list-infobook">
        <h3 class="modal-book-title">${l}</h3>
        <p class="modal-book-autor">${s}</p>
        <p class="modal-book-description">${i}</p>
        <div class="modal-list-shops">
        <ul class="modal-book-list-shops">
          <li class="modal-book-shops-item">
           <a href="${r}" target="_blank" class="">
           <img src="${M}" alt="" widht="62" height="19" class="modal-img-shop"/>
           </a>
          </li>
          <li class="modal-book-shops-item">
           <a href="${A}" target="_blank" class="">
           <img src="${I}" alt="" widht="33" height="32" class="modal-img-shop-apple"/>
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
  </div>`,{onShow:()=>{document.addEventListener("keydown",f),k.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",f),k.style.overflow="auto"}});function f(C){const q="Escape";C.code===q&&h.close()}h.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{h.close()})}tt.addEventListener("click",ot);function ot(t){if(t.preventDefault(),!t.target.classList.contains("category-books__img"))return;const o=t.target.closest(".modal-list").dataset.id;Z(o).then(s=>{const l=s;if(et(l),!N())btnAddEl.classList.add("hidden"),btnRemoveEl.classList.add("hidden"),textRemoveEl.classList.add("hidden");else{const i=document.querySelector("#add"),a=document.querySelector("#remove"),r=document.querySelector(".txt-remove");it(o)?(a.classList.remove("hidden"),r.classList.remove("hidden")):i.classList.remove("hidden"),a.addEventListener("click",()=>{st(o),_(JSON.parse(localStorage.getItem(u))),i.classList.remove("hidden"),a.classList.add("hidden"),r.classList.add("hidden")}),i.addEventListener("click",()=>{lt(l),_(JSON.parse(localStorage.getItem(u))),i.classList.add("hidden"),a.classList.remove("hidden"),r.classList.remove("hidden")})}})}function st(t){const o=m().filter(s=>s._id!==t);$(o),m(),console.log("Товар удален из корзины")}function lt(t){const e=m();e.push(t),$(e)}function $(t){localStorage.setItem(u,JSON.stringify(t))}function m(){try{const t=localStorage.getItem(u);return t?JSON.parse(t):[]}catch(t){console.log(t.message)}}function it(t){return!m().every(o=>o._id!==t)}
//# sourceMappingURL=commonHelpers.js.map
