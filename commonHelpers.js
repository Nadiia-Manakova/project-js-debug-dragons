import{g as q,s as p,a as y,h as b,b as T,c as x,d as N,w as _,e as B,f as M,i as I}from"./assets/icons-sprite-9656f804.js";import{N as v,b as j}from"./assets/vendor-4b8b63a3.js";const g=document.querySelector(".list_general"),O=document.querySelector(".title_best_sellers");let d=0,n=window.innerWidth;window.addEventListener("resize",R);function R(e){const t=e.target.outerWidth;(t>767&&n<768||t>1439&&n<1440||t<1440&&n>1439||t<768&&n>767)&&location.reload()}const W=()=>{n<768?d=1:n>=768&&n<1440?d=3:d=5};q().then(e=>{console.log(e),J(e)}).catch(e=>{v.Notify.failure("An error occurred while fetching images. Please try again.")});function D(){p();let e=this.getAttribute("data-my-attribute");console.log(e),H(e),y(e).then(t=>{O.style.display="none",g.innerHTML="",S(t)}).catch(t=>{v.Notify.failure("An error occurred while fetching images. Please try again.")})}function H(e){const t=document.querySelector(".categories__title"),s=document.querySelector(".categories__list").getElementsByTagName("li"),l=Array.from(s).find(a=>a.textContent.trim()===e);l&&(l.classList.add("selected-category"),t.style.color="var(--text-color)")}function K(e){return e.books.slice(0,d).map(t=>{let o=L(t),s=E(t);return`

      <li class="list_five_books modal-list" data-id="${t._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function P(e){return e.map(t=>{const o=K(t);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${t.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function J(e){window.scrollTo(0,0);const t=P(e);g.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",D)})}function z(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function L(e){return e.title.length>16?e.title.substring(0,16)+"...":e.title}function E(e){return e.author.length>25?e.author.substring(0,20)+"...":e.author}function F(e){return e.map(t=>{let o=L(t),s=E(t);return`<li class="list_five_books modal-list" data-id="${t._id}">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${o}</h3>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function U(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function S(e){window.scrollTo(0,0);const t=F(e),o=z(e),s=U(o,t);g.insertAdjacentHTML("beforeend",s),b(),document.querySelector(".btn_back").addEventListener("click",Y)}function Y(){location.reload()}W();const c={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};p();function G(e){T().then(t=>{const o=t.data;o.sort((s,i)=>s.list_name.localeCompare(i.list_name)),V(o)})}function V(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);c.filterListEl.insertAdjacentHTML("beforeend",t.join("")),b()}G();c.filterListEl.addEventListener("click",Q);function Q(e){X(e),p();const t=e.target.textContent;y(t).then(o=>{g.innerHTML="",S(o),b(),c.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function X(e){if(e.target.tagName==="LI"){const t=c.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}c.categoriesTitle.style.color="var(--text-color)"}const k=document.querySelector("body"),u="booklist",Z=document.querySelector(".bookgallery");function ee(e){const{_id:t,book_image:o,author:s,title:i,description:l="No description...",buy_links:{0:{name:a,url:r},1:{name:le,url:$}}}=e,h=j.create(`
 <div class="modal-book-js" data-id="${t}">
      <button type="button" class="modal-book-btn-close">
      <svg class="icons-modal"  width="12" height="12">
        <use href="${B}#x-close-btn"></use>
      </svg>
      </button>
        <img src="${o}" alt="${i}" class="modal-img-book widht="192" height="281"/>
        <div class="modal-list-infobook">
        <h3 class="modal-book-title">${i}</h3>
        <p class="modal-book-autor">${s}</p>
        <p class="modal-book-description">${l}</p>
        <div class="modal-list-shops">
        <ul class="modal-book-list-shops">
          <li class="modal-book-shops-item">
           <a href="${r}" target="_blank" class="">
           <img src="${M}" alt="" widht="62" height="19" class="modal-img-shop"/>
           </a>
          </li>
          <li class="modal-book-shops-item">
           <a href="${$}" target="_blank" class="">
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
  </div>`,{onShow:()=>{document.addEventListener("keydown",f),k.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",f),k.style.overflow="auto"}});function f(A){const C="Escape";A.code===C&&h.close()}h.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{h.close()})}Z.addEventListener("click",te);function te(e){if(e.preventDefault(),!e.target.classList.contains("category-books__img"))return;const o=e.target.closest(".modal-list").dataset.id;x(o).then(s=>{const i=s;if(ee(i),!N())btnAddEl.classList.add("hidden"),btnRemoveEl.classList.add("hidden"),textRemoveEl.classList.add("hidden");else{const l=document.querySelector("#add"),a=document.querySelector("#remove"),r=document.querySelector(".txt-remove");ie(o)?(a.classList.remove("hidden"),r.classList.remove("hidden")):l.classList.remove("hidden"),a.addEventListener("click",()=>{oe(o),_(JSON.parse(localStorage.getItem(u))),l.classList.remove("hidden"),a.classList.add("hidden"),r.classList.add("hidden")}),l.addEventListener("click",()=>{se(i),_(JSON.parse(localStorage.getItem(u))),l.classList.add("hidden"),a.classList.remove("hidden"),r.classList.remove("hidden")})}})}function oe(e){const o=m().filter(s=>s._id!==e);w(o),m(),console.log("Товар удален из корзины")}function se(e){const t=m();t.push(e),w(t)}function w(e){localStorage.setItem(u,JSON.stringify(e))}function m(){try{const e=localStorage.getItem(u);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}function ie(e){return!m().every(o=>o._id!==e)}
//# sourceMappingURL=commonHelpers.js.map
