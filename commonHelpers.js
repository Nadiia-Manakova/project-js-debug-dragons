import{g as B,a as E,b as M}from"./assets/burgerMenu-8147626e.js";import{N as w,a as S,b as N}from"./assets/vendor-542f1b53.js";const j=document.querySelector(".title_best_sellers"),m=document.querySelector(".list_general");let u=0,l=window.innerWidth;window.addEventListener("resize",I);function I(t){const e=t.target.outerWidth;(e>767&&l<768||e>1439&&l<1440||e<1440&&l>1439||e<768&&l>767)&&location.reload()}const W=()=>{l<768?u=1:l>=768&&l<1440?u=3:u=5};B().then(t=>{console.log(t),z(t)}).catch(t=>{w.Notify.failure("An error occurred while fetching images. Please try again.")});function O(){let t=this.getAttribute("data-my-attribute");R(t),E(t).then(e=>{j.style.display="none",m.innerHTML="",q(e)}).catch(e=>{w.Notify.failure("An error occurred while fetching images. Please try again.")})}function R(t){const e=document.querySelector(".categories__title"),s=document.querySelector(".categories__list").getElementsByTagName("li"),c=Array.from(s).find(g=>g.textContent.trim()===t);c&&(c.classList.add("selected-category"),e.style.color="var(--text-color)")}function H(t){return t.books.slice(0,u).map(e=>{let o=$(e),s=C(e);return`
      <li class="list_five_books modal-list" data-id="${e._id}">
      <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${e.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>
        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function K(t){return t.map(e=>{const o=H(e);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${e.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${e.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function z(t){window.scrollTo(0,0);const e=K(t);m.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",O)})}function P(t){return t.slice(0,1).map(e=>e.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function $(t){return t.title.length>16?t.title.substring(0,16)+"...":t.title}function C(t){return t.author.length>25?t.author.substring(0,25)+"...":t.author}function Y(t){return t.map(e=>{let o=$(e),s=C(e);return`<li class="list_five_books modal-list">
  <a href="#" class='category-books__link'>
        <img class='category-books__img' src="${e.book_image}" alt="book" />
        <div class='category-books__wrapper'>
        <p class='category-books__text'>quick view</p>
        </div></a>
        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${e.list_name}</h1>
      </li>`}).join("")}function D(t,e){return`<div class='div_category'><h1 class="title-category">${t}</h1></><ul class="list_five_general">${e}</ul>
  <button class="btn_back">BACK</button></div>`}function q(t){window.scrollTo(0,0);const e=Y(t),o=P(t),s=D(o,e);m.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",J)}function J(){location.reload()}W();const i={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(i.title);function F(t){M().then(e=>{const o=e.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),G(o)})}function G(t){const e=t.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);i.filterListEl.insertAdjacentHTML("beforeend",e.join(""))}F();i.filterListEl.addEventListener("click",U);function U(t){V(t);const e=t.target.textContent;E(e).then(o=>{m.innerHTML="",q(o),i.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function V(t){if(t.target.tagName==="LI"){const e=i.filterListEl.querySelector(".selected-category");e&&e.classList.remove("selected-category"),t.target.classList.add("selected-category")}i.categoriesTitle.style.color="var(--text-color)"}S.defaults.baseURL="https://books-backend.p.goit.global/books/";async function v(t){const{data:e}=await S(t);return console.log(e),e}document.querySelector(".list");const L=document.querySelector("body"),d=[];document.addEventListener("click",Q);function Q(t){if(console.log(t),!t.target.closest(".modal-list"))return;console.log(t.target),t.preventDefault();const o=t.target.closest(".modal-list").dataset.id;console.log(o),v(o).then(s=>{console.log(d);const{_id:n,author:c,book_image:g,title:k,description:A,buy_links:[{url:x},{url:T}]}=s,h=N.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="./img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${g}" alt="${k}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${k}</h3>
          <p class="modal-book-autor">${c}</p>
          <p class="modal-book-description">${A}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li class="modal-book-shops-item">
             <a href="${x}" target="_blank" class="">
             <img src="./img/amazon.png" alt="" widht="62" height="19" class="modal-img-shop"/> 
             </a>
            </li>
            <li class="modal-book-shops-item">
             <a href="${T}" target="_blank" class="">
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",_),L.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",_),L.style.overflow="auto"}});function _(p){const f="Escape";p.code===f&&h.close()}h.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{h.close()});const y="booklist";d.push(s);const a=document.querySelector("#add"),r=document.querySelector("#remove"),b=document.querySelector(".txt-remove");v(o).then(p=>{const f=p.id;localStorage.getItem({idBook:f})!==null?(a.classList.add("hidden"),r.classList.remove("hidden")):(a.classList.remove("hidden"),r.classList.add("hidden"),b.classList.add("hidden")),a.addEventListener("click",()=>{localStorage.setItem(y,JSON.stringify(d)),a.classList.add("hidden"),r.classList.remove("hidden"),b.classList.remove("hidden")}),r.addEventListener("click",()=>{localStorage.removeItem(y,JSON.stringify(d)),a.classList.remove("hidden"),r.classList.add("hidden"),b.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
