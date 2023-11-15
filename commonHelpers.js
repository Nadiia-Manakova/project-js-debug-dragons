import{g as j,s as k,a as $,h as _,b as I,c as W,w as E}from"./assets/support-17832f22.js";import{N as C,a as A,b as O}from"./assets/vendor-23f73890.js";const h=document.querySelector(".list_general"),R=document.querySelector(".title_best_sellers");let g=0,i=window.innerWidth;window.addEventListener("resize",H);function H(e){const t=e.target.outerWidth;(t>767&&i<768||t>1439&&i<1440||t<1440&&i>1439||t<768&&i>767)&&location.reload()}const K=()=>{i<768?g=1:i>=768&&i<1440?g=3:g=5};j().then(e=>{console.log(e),Y(e)}).catch(e=>{C.Notify.failure("An error occurred while fetching images. Please try again.")});function z(){k();let e=this.getAttribute("data-my-attribute");console.log(e),P(e),$(e).then(t=>{R.style.display="none",h.innerHTML="",T(t)}).catch(t=>{C.Notify.failure("An error occurred while fetching images. Please try again.")})}function P(e){const t=document.querySelector(".categories__title"),o=document.querySelector(".categories__list").getElementsByTagName("li"),d=Array.from(o).find(b=>b.textContent.trim()===e);d&&(d.classList.add("selected-category"),t.style.color="var(--text-color)")}function D(e){return e.books.slice(0,g).map(t=>{let s=q(t),o=x(t);return`

      <li class="list_five_books modal-list" data-id="${t._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${s}</h3>
        <p class="author_general">${o}</p>
      </li>
    `}).join("")}function U(e){return e.map(t=>{const s=D(t);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${t.list_name}</h2>
        <ul class="list_five_general">${s}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function Y(e){window.scrollTo(0,0);const t=U(e);h.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(o=>{o.addEventListener("click",z)})}function J(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(s=>`<span>${s}</span>`).join(" "))}function q(e){return e.title.length>16?e.title.substring(0,16)+"...":e.title}function x(e){return e.author.length>25?e.author.substring(0,20)+"...":e.author}function F(e){return e.map(t=>{let s=q(t),o=x(t);return`<li class="list_five_books modal-list" data-id="${t._id}">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h3 class="title_general">${s}</h3>
        <p class="text_general">${o}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function G(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function T(e){window.scrollTo(0,0);const t=F(e),s=J(e),o=G(s,t);h.insertAdjacentHTML("beforeend",o),_(),document.querySelector(".btn_back").addEventListener("click",V)}function V(){location.reload()}K();const c={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};k();function Q(e){I().then(t=>{const s=t.data;s.sort((o,r)=>o.list_name.localeCompare(r.list_name)),X(s)})}function X(e){const t=e.map(s=>`<li class="categories__list-item">${s.list_name}</li>`);c.filterListEl.insertAdjacentHTML("beforeend",t.join("")),_()}Q();c.filterListEl.addEventListener("click",Z);function Z(e){ee(e),k();const t=e.target.textContent;$(t).then(s=>{h.innerHTML="",T(s),_(),c.title.style.display="none"}).catch(s=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function ee(e){if(e.target.tagName==="LI"){const t=c.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}c.categoriesTitle.style.color="var(--text-color)"}A.defaults.baseURL="https://books-backend.p.goit.global/books/";async function w(e){const{data:t}=await A(e);return console.log(t),t}const S=document.querySelector("body"),l=[];document.addEventListener("click",te);function te(e){if(console.log(e),!e.target.closest(".modal-list"))return;console.log(e.target),e.preventDefault();const s=e.target.closest(".modal-list").dataset.id;console.log(s),w(s).then(o=>{console.log(l);const{_id:r,author:d,book_image:b,title:y,description:B,buy_links:[{url:M},{url:N}]}=o,p=O.create(`
   <div class="modal-book-js" data-id="${r}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="./img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${b}" alt="${y}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${y}</h3>
          <p class="modal-book-autor">${d}</p>
          <p class="modal-book-description">${B}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li class="modal-book-shops-item">
             <a href="${M}" target="_blank" class="">
             <img src="./amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${N}" target="_blank" class="">
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",v),S.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",v),S.style.overflow="auto"}});function v(m){const f="Escape";m.code===f&&p.close()}p.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{p.close()});const a=document.querySelector("#add"),n=document.querySelector("#remove"),u=document.querySelector(".txt-remove");if(!W())a.classList.add("hidden"),n.classList.add("hidden"),u.classList.add("hidden");else{const m="booklist";l.push(o),E(l),console.log(l),w(s).then(f=>{const L=f.id;localStorage.getItem({idBook:L})!==null?(a.classList.add("hidden"),n.classList.remove("hidden")):(a.classList.remove("hidden"),n.classList.add("hidden"),u.classList.add("hidden")),a.addEventListener("click",()=>{localStorage.setItem(m,JSON.stringify(l)),a.classList.add("hidden"),n.classList.remove("hidden"),u.classList.remove("hidden")}),n.addEventListener("click",()=>{localStorage.removeItem(m,JSON.stringify(l)),E(l),a.classList.remove("hidden"),n.classList.add("hidden"),u.classList.add("hidden")})})}})}
//# sourceMappingURL=commonHelpers.js.map
