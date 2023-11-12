import{g as T,a as v,b as B}from"./assets/burgerMenu-f48765b9.js";import{N as L,a as E,b as x}from"./assets/vendor-6ba42902.js";const M=document.querySelector(".title_best_sellers"),d=document.querySelector(".list_general");let c=0,b=window.innerWidth;b>=996?c=5:b>=720?c=3:b>=240&&(c=1);T().then(e=>{console.log(e),O(e)}).catch(e=>{L.Notify.failure("An error occurred while fetching images. Please try again.")});function N(){let e=this.getAttribute("data-my-attribute");v(e).then(t=>{M.style.display="none",d.innerHTML="",$(t)}).catch(t=>{L.Notify.failure("An error occurred while fetching images. Please try again.")})}function j(e){return e.books.slice(0,c).map(t=>{let o=S(t),s=w(t);return`
      <li class="list_five_books" data-id="${t._id}">
        <img class="img_books" src="${t.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function I(e){return e.map(t=>{const o=j(t);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${t.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function O(e){window.scrollTo(0,0);const t=I(e);d.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",N)})}function H(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function S(e){return e.title.length>17?e.title.substring(0,17)+"...":e.title}function w(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function K(e){return e.map(t=>{let o=S(t),s=w(t);return`<li class="list_five_books">
        <img class="img_books" src="${t.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function R(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function $(e){window.scrollTo(0,0);const t=K(e),o=H(e),s=R(o,t);d.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",P)}function P(){location.reload()}const l={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(l.title);function Y(e){B().then(t=>{const o=t.data;o.sort((s,a)=>s.list_name.localeCompare(a.list_name)),z(o)})}function z(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);l.filterListEl.insertAdjacentHTML("beforeend",t.join(""))}Y();l.filterListEl.addEventListener("click",D);function D(e){J(e);const t=e.target.textContent;v(t).then(o=>{d.innerHTML="",$(o),l.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function J(e){if(e.target.tagName==="LI"){const t=l.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}l.categoriesTitle.style.color="var(--text-color)"}E.defaults.baseURL="https://books-backend.p.goit.global/books/";async function _(e){const{data:t}=await E(e);return console.log(t),t}document.querySelector(".list");const y=document.querySelector("body"),r=[];document.addEventListener("click",W);function W(e){if(console.log(e),!e.target.closest(".list_five_books"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".list_five_books").dataset.id;console.log(o),_(o).then(s=>{console.log(r);const{_id:a,author:C,book_image:q,title:p,description:A,buy_links:[{url:F},{url:G}]}=s,u=x.create(`
   <div class="modal-book-js" data-id="${a}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="12" height="12">
          <use href="../img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${q}" alt="${p}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h3 class="modal-book-title">${p}</h3>
          <p class="modal-book-autor">${C}</p>
          <p class="modal-book-description">${A}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li>amason
             <a href="#" target="_blank" class="">
             <img crs="../img/amazon.png" alt="" widht="62" height="19"/> 
             </a>
            </li>
            <li>apple-book
             <a href="#" target="_blank" class="">
             <img crs="../img/apple-books.png" alt="" widht="62" height="19"/> 
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
