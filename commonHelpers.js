import{i as x,g as j,c as D,u as M,s as N,a as T,b as C,d as O,r as A,e as R,f as W,h as l,N as I,j as F}from"./assets/vendor-1c051128.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const H={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"};x(H);const g=j(),a={signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".js-sign-out-btn"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop")};a.signInBtn.addEventListener("click",P);a.signUpBtn.addEventListener("click",z);a.signUpForm.addEventListener("submit",K);a.signInForm.addEventListener("submit",G);a.openModalBtn.addEventListener("click",h);a.closeModalBtn.addEventListener("click",h);a.exitBtn.addEventListener("click",Z);function h(){a.modal.classList.toggle("auth-backdrop-hidden")}function P(e){e.preventDefault(),a.signUpBox.classList.add("auth-hidden"),a.signInBox.classList.remove("auth-hidden"),a.signUpBtn.classList.remove("active"),a.signInBtn.classList.add("active")}function z(e){e.preventDefault(),a.signUpBox.classList.remove("auth-hidden"),a.signInBox.classList.add("auth-hidden"),a.signUpBtn.classList.add("active"),a.signInBtn.classList.remove("active")}function K(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),Y(o.email,o.password,o.username)}function G(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),V(o.email,o.password)}function Y(e,t,o){D(g,e,t).then(()=>M(g.currentUser,{displayName:o})).then(()=>{console.log(`Welcome, ${o}!`),alert(`Welcome, ${o}!`),console.log(f()),h()}).catch(s=>{const n=s.code,i=s.message;console.log(n,i),alert(n,i)})}function V(e,t){N(g,e,t).then(o=>{const s=o.user;console.log(`Welcome, ${s.displayName}!`),alert(`Welcome, ${s.displayName}!`),console.log(f()),h()}).catch(o=>{const s=o.code,n=o.message;console.log(s,n),alert(s,n)})}function Z(){T(g).then(()=>{console.log("Sign-out successful."),console.log("Sign-out successful."),alert("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`),console.log(`An error happened. ${e}`),alert(`An error happened. ${e}`)})}function f(){const e=g.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid}}function J(e){if(!e){console.log("No data to write!");return}const t=f();if(!t){console.log("User is not authorized!"),alert("User is not authorized!");return}const o=t.uid,s=C();O(A(s,"users/"+o),{books:e}),console.log("Success!"),alert("Success!")}function X(){const e=f();if(!e){console.log("User is not authorized!"),alert("User is not authorized!");return}const t=e.uid,o=A(C());R(W(o,`users/${t}`)).then(s=>{if(s.exists())return console.log(s.val()),alert("Success!"),s.val();console.log("No data available"),alert("No data available")}).catch(s=>{console.log(s),alert(s)})}const Q=document.querySelector(".dbw");Q.addEventListener("click",ee);function ee(){J([])}const te=document.querySelector(".dbr");te.addEventListener("click",X);l.defaults.baseURL="https://books-backend.p.goit.global/books";const r={list:document.querySelector(".categories__list"),galleryList:document.querySelector(".gallery"),galleryTitle:document.querySelector(".gallery__title"),categoryList:document.querySelector(".gallery__category-list"),categoriesTitle:document.querySelector(".categories__title")},oe={categoriesList:"/category-list",topBooks:"/top-books",category:"/category",id:"/id"};async function U(e){return await l.get(""+e)}function se(e){U(e).then(t=>{const o=t.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),ne(o)})}function ne(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);r.list.insertAdjacentHTML("beforeend",t.join(""))}se(oe.categoriesList);r.list.addEventListener("click",ie);function ie(e){re(e);let o=`/category?category=${e.target.textContent}`;U(o).then(s=>{const n=s.data;ae(n)})}function ae(e){const t=e.map(o=>{const{list_name:s}=o;return r.galleryTitle.textContent=s,le(o)}).join("");r.categoryList.innerHTML=t,console.log("RENDER",t);}function re(e){if(e.target.tagName==="LI"){const t=r.list.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}r.categoriesTitle.style.color="var(--text-color)"}function le(e){const{book_image:t,author:o,title:s,_id:n}=e;return`<li class="gallery__card-item" id ="${n}" >
        <div class="gallery__image-box">
          <img class="gallery__card-image" src="${t}" alt="${s}" loading="lazy" width="180px"
          height="256px">
          <button class="gallery__card-quickviue js-modal-open" type="button" data-button="js-btn">
            QUICK VIEW
          </button>
        </div>
        <h3 class="gallery__card-title">${s}</h3>
        <p class="gallery__card-text">${o}</p>
      </li>`}const ce="https://books-backend.p.goit.global/books/";async function de(){const e=`${ce}top-books`;return(await l.get(e)).data}const ue="https://books-backend.p.goit.global/books/";async function ge(e){const t=`${ue}category?category=${e}`;return(await l.get(t)).data}const L=document.querySelector(".list_general");let p=0,v=window.innerWidth;v>=1440?p=5:v>=720?p=3:v>=240&&(p=1);de().then(e=>{console.log(e),pe(e)}).catch(e=>{I.Notify.failure("An error occurred while fetching images. Please try again.")});function me(){let e=this.getAttribute("data-my-attribute");ge(e).then(t=>{L.innerHTML="",he(t)}).catch(t=>{I.Notify.failure("An error occurred while fetching images. Please try again.")})}function pe(e){window.scrollTo(0,0);const t=e.map(s=>{const n=s.books.slice(0,p).map(i=>`
      <li class="list_five_books" data-id="${i._id}">
        <img src="${i.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${i.title}</h2>
        <p class="author_general">${i.author}</p>
      </li>
    `).join("");return`
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${s.list_name}</p>
        <ul class="list_five_general">${n}</ul>
        <button class="btn" data-my-attribute="${s.list_name}">LOAD MORE</button>
      </li></div>
    `}).join("");L.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",me)})}function he(e){window.scrollTo(0,0);const o=`<div class='div_category'><ul class="list_five_general">${e.map(n=>`<li class="list_five_books">
        <img src="${n.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${n.title}</h2>
        <p class="text_general">${n.author}</p>
      </li>`).join("")}</ul>
  <button class="btn_back">BACK</button></div>`;L.insertAdjacentHTML("beforeend",o),document.querySelector(".btn_back").addEventListener("click",fe)}function fe(){location.reload()}const be=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],ye=document.querySelector(".support-list");function ke(e){return e.map(({title:t,url:o,img:s},n)=>`<li class="support-item">
        <span class='support-item-num'>0${n+1}</span>
        <a class="support-link" target='blank' href="${o}">
          <img
            class="support-img"
            src="${s}"
            alt="${t}"
          />
        </a>
      </li>`).join("")}ye.innerHTML=ke(be);l.defaults.baseURL="https://books-backend.p.goit.global/books/";async function $(e){const{data:t}=await l(e);return console.log(t),t}document.querySelector(".list");const B=document.querySelector("body"),m=[];document.addEventListener("click",ve);function ve(e){if(console.log(e),!e.target.closest(".users-list-item"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".users-list-item").dataset.id;console.log(o),$(o).then(s=>{console.log(m);const{_id:n,author:i,book_image:c,title:_,description:q,buy_links:Le}=s,w=F.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="./images/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${c}" alt="${_}" class="modal-img-book widht=192 height=281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${_}</h1>
          <h2 class="modal-book-autor">${i}</h2>
          <p class="modal-book-description">${q}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li>Amazon</li>
            <li>Apple Books</li>
            <li>Barnes and Noble</li>
            <li>bookshop</li>
            </div>
          </ul>
          </div>
          <button type="button" class="modal-book-btn hidden btn-add" id="add">
          add to shopping list</button>
          <button type="button" class="modal-book-btn hidden" id="remove">
          remove from the shopping list</button>
          <p class="txt-remove hidden">Сongratulations! You have added the book 
          to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",S),B.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",S),B.style.overflow="auto"}});function S(y){const k="Escape";y.code===k&&w.close()}w.show();const E="booklist";m.push(s);const d=document.querySelector("#add"),u=document.querySelector("#remove"),b=document.querySelector(".txt-remove");$(o).then(y=>{const k=y.id;localStorage.getItem({idBook:k})!==null?(d.classList.add("hidden"),u.classList.remove("hidden")):(d.classList.remove("hidden"),u.classList.add("hidden"),b.classList.add("hidden")),d.addEventListener("click",()=>{localStorage.setItem(E,JSON.stringify(m)),d.classList.add("hidden"),u.classList.remove("hidden"),b.classList.remove("hidden")}),u.addEventListener("click",()=>{localStorage.removeItem(E,JSON.stringify(m)),d.classList.remove("hidden"),u.classList.add("hidden"),b.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
