import{g as x,a as v,b as M}from"./assets/burgerMenu-83b980d7.js";import{N as L,a as E,b as N}from"./assets/vendor-e8a5e68e.js";const j=document.querySelector(".title_best_sellers"),d=document.querySelector(".list_general");let c=0,b=window.innerWidth;b>=996?c=5:b>=720?c=3:b>=240&&(c=1);x().then(t=>{console.log(t),K(t)}).catch(t=>{L.Notify.failure("An error occurred while fetching images. Please try again.")});function I(){let t=this.getAttribute("data-my-attribute");v(t).then(e=>{j.style.display="none",d.innerHTML="",w(e)}).catch(e=>{L.Notify.failure("An error occurred while fetching images. Please try again.")})}function O(t){return t.books.slice(0,c).map(e=>{let o=S(e),s=$(e);return`
      <li class="list_five_books" data-id="${e._id}">
        <img class="img_books" src="${e.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function H(t){return t.map(e=>{const o=O(e);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${e.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${e.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function K(t){window.scrollTo(0,0);const e=H(t);d.insertAdjacentHTML("beforeend",e),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",I)})}function R(t){return t.slice(0,1).map(e=>e.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function S(t){return t.title.length>17?t.title.substring(0,17)+"...":t.title}function $(t){return t.author.length>25?t.author.substring(0,25)+"...":t.author}function P(t){return t.map(e=>{let o=S(e),s=$(e);return`<li class="list_five_books">
        <img class="img_books" src="${e.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
        <h1 hidden>${e.list_name}</h1>
      </li>`}).join("")}function Y(t,e){return`<div class='div_category'><h1 class="title-category">${t}</h1></><ul class="list_five_general">${e}</ul>
  <button class="btn_back">BACK</button></div>`}function w(t){window.scrollTo(0,0);const e=P(t),o=R(t),s=Y(o,e);d.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",z)}function z(){location.reload()}const l={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(l.title);function D(t){M().then(e=>{const o=e.data;o.sort((s,a)=>s.list_name.localeCompare(a.list_name)),J(o)})}function J(t){const e=t.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);l.filterListEl.insertAdjacentHTML("beforeend",e.join(""))}D();l.filterListEl.addEventListener("click",W);function W(t){F(t);const e=t.target.textContent;v(e).then(o=>{d.innerHTML="",w(o),l.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function F(t){if(t.target.tagName==="LI"){const e=l.filterListEl.querySelector(".selected-category");e&&e.classList.remove("selected-category"),t.target.classList.add("selected-category")}l.categoriesTitle.style.color="var(--text-color)"}E.defaults.baseURL="https://books-backend.p.goit.global/books/";async function _(t){const{data:e}=await E(t);return console.log(e),e}document.querySelector(".list");const y=document.querySelector("body"),r=[];document.addEventListener("click",G);function G(t){if(console.log(t),!t.target.closest(".modal-list"))return;console.log(t.target),t.preventDefault();const o=t.target.closest(".modal-list").dataset.id;console.log(o),_(o).then(s=>{console.log(r);const{_id:a,author:C,book_image:q,title:p,description:A,buy_links:[{url:T},{url:B}]}=s,u=N.create(`
   <div class="modal-book-js" data-id="${a}">
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
             <a href="${B}" target="_blank" class="">
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",f),y.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",f),y.style.overflow="auto"}});function f(g){const h="Escape";g.code===h&&u.close()}u.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{u.close()});const k="booklist";r.push(s);const i=document.querySelector("#add"),n=document.querySelector("#remove"),m=document.querySelector(".txt-remove");_(o).then(g=>{const h=g.id;localStorage.getItem({idBook:h})!==null?(i.classList.add("hidden"),n.classList.remove("hidden")):(i.classList.remove("hidden"),n.classList.add("hidden"),m.classList.add("hidden")),i.addEventListener("click",()=>{localStorage.setItem(k,JSON.stringify(r)),i.classList.add("hidden"),n.classList.remove("hidden"),m.classList.remove("hidden")}),n.addEventListener("click",()=>{localStorage.removeItem(k,JSON.stringify(r)),i.classList.remove("hidden"),n.classList.add("hidden"),m.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
