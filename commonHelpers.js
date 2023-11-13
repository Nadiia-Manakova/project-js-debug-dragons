import{g as N,a as E,s as w,h as S,b as j}from"./assets/burgerMenu-95105607.js";import{N as $,a as C,b as I}from"./assets/vendor-3361d7a0.js";const m=document.querySelector(".list_general"),W=document.querySelector(".title_best_sellers");let u=0,l=window.innerWidth;window.addEventListener("resize",O);function O(e){const t=e.target.outerWidth;(t>767&&l<768||t>1439&&l<1440||t<1440&&l>1439||t<768&&l>767)&&location.reload()}const R=()=>{l<768?u=1:l>=768&&l<1440?u=3:u=5};N().then(e=>{console.log(e),Y(e)}).catch(e=>{$.Notify.failure("An error occurred while fetching images. Please try again.")});function H(){let e=this.getAttribute("data-my-attribute");console.log(e),K(e),E(e).then(t=>{W.style.display="none",m.innerHTML="",x(t)}).catch(t=>{$.Notify.failure("An error occurred while fetching images. Please try again.")})}function K(e){const t=document.querySelector(".categories__title"),s=document.querySelector(".categories__list").getElementsByTagName("li"),c=Array.from(s).find(g=>g.textContent.trim()===e);c&&(c.classList.add("selected-category"),t.style.color="var(--text-color)")}function z(e){return e.books.slice(0,u).map(t=>{let o=q(t),s=A(t);return`

      <li class="list_five_books modal-list" data-id="${t._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function P(e){return e.map(t=>{const o=z(t);return`
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${t.list_name}</p>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function Y(e){window.scrollTo(0,0);const t=P(e);m.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",H)})}function D(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function q(e){return e.title.length>16?e.title.substring(0,16)+"...":e.title}function A(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function J(e){return e.map(t=>{let o=q(t),s=A(t);return`<li class="list_five_books modal-list">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${t.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>

        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function F(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function x(e){window.scrollTo(0,0);const t=J(e),o=D(e),s=F(o,t);m.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",G)}function G(){location.reload()}R();const r={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};w();function U(e){j().then(t=>{const o=t.data;o.sort((s,i)=>s.list_name.localeCompare(i.list_name)),V(o)})}function V(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);r.filterListEl.insertAdjacentHTML("beforeend",t.join("")),S()}U();r.filterListEl.addEventListener("click",Q);function Q(e){X(e),w();const t=e.target.textContent;E(t).then(o=>{m.innerHTML="",x(o),S(),r.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function X(e){if(e.target.tagName==="LI"){const t=r.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}r.categoriesTitle.style.color="var(--text-color)"}C.defaults.baseURL="https://books-backend.p.goit.global/books/";async function v(e){const{data:t}=await C(e);return console.log(t),t}document.querySelector(".list");const L=document.querySelector("body"),d=[];document.addEventListener("click",Z);function Z(e){if(console.log(e),!e.target.closest(".modal-list"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".modal-list").dataset.id;console.log(o),v(o).then(s=>{console.log(d);const{_id:i,author:c,book_image:g,title:k,description:T,buy_links:[{url:B},{url:M}]}=s,h=I.create(`
   <div class="modal-book-js" data-id="${i}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="./img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${g}" alt="${k}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${k}</h3>
          <p class="modal-book-autor">${c}</p>
          <p class="modal-book-description">${T}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li class="modal-book-shops-item">
             <a href="${B}" target="_blank" class="">
             <img src="./img/amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${M}" target="_blank" class="">
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",_),L.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",_),L.style.overflow="auto"}});function _(p){const f="Escape";p.code===f&&h.close()}h.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{h.close()});const y="booklist";d.push(s);const a=document.querySelector("#add"),n=document.querySelector("#remove"),b=document.querySelector(".txt-remove");v(o).then(p=>{const f=p.id;localStorage.getItem({idBook:f})!==null?(a.classList.add("hidden"),n.classList.remove("hidden")):(a.classList.remove("hidden"),n.classList.add("hidden"),b.classList.add("hidden")),a.addEventListener("click",()=>{localStorage.setItem(y,JSON.stringify(d)),a.classList.add("hidden"),n.classList.remove("hidden"),b.classList.remove("hidden")}),n.addEventListener("click",()=>{localStorage.removeItem(y,JSON.stringify(d)),a.classList.remove("hidden"),n.classList.add("hidden"),b.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
