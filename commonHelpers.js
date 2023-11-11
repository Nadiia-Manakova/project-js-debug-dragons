import{i as M,g as N,c as O,u as R,s as H,a as W,b as I,d as F,r as x,e as P,f as z,h as r,N as j,j as K}from"./assets/vendor-1c051128.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const G={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"};M(G);const g=N(),a={signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".js-sign-out-btn"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop")};a.signInBtn.addEventListener("click",Y);a.signUpBtn.addEventListener("click",V);a.signUpForm.addEventListener("submit",Z);a.signInForm.addEventListener("submit",J);a.openModalBtn.addEventListener("click",b);a.closeModalBtn.addEventListener("click",b);a.exitBtn.addEventListener("click",ee);function b(){a.modal.classList.toggle("auth-backdrop-hidden")}function Y(e){e.preventDefault(),a.signUpBox.classList.add("auth-hidden"),a.signInBox.classList.remove("auth-hidden"),a.signUpBtn.classList.remove("active"),a.signInBtn.classList.add("active")}function V(e){e.preventDefault(),a.signUpBox.classList.remove("auth-hidden"),a.signInBox.classList.add("auth-hidden"),a.signUpBtn.classList.add("active"),a.signInBtn.classList.remove("active")}function Z(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),X(o.email,o.password,o.username)}function J(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),Q(o.email,o.password)}function X(e,t,o){O(g,e,t).then(()=>R(g.currentUser,{displayName:o})).then(()=>{console.log(`Welcome, ${o}!`),alert(`Welcome, ${o}!`),console.log(y()),b()}).catch(s=>{const n=s.code,i=s.message;console.log(n,i),alert(n,i)})}function Q(e,t){H(g,e,t).then(o=>{const s=o.user;console.log(`Welcome, ${s.displayName}!`),alert(`Welcome, ${s.displayName}!`),console.log(y()),b()}).catch(o=>{const s=o.code,n=o.message;console.log(s,n),alert(s,n)})}function ee(){W(g).then(()=>{console.log("Sign-out successful."),console.log("Sign-out successful."),alert("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`),console.log(`An error happened. ${e}`),alert(`An error happened. ${e}`)})}function y(){const e=g.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid}}function te(e){if(!e){console.log("No data to write!");return}const t=y();if(!t){console.log("User is not authorized!"),alert("User is not authorized!");return}const o=t.uid,s=I();F(x(s,"users/"+o),{books:e}),console.log("Success!"),alert("Success!")}function oe(){const e=y();if(!e){console.log("User is not authorized!"),alert("User is not authorized!");return}const t=e.uid,o=x(I());P(z(o,`users/${t}`)).then(s=>{if(s.exists())return console.log(s.val()),alert("Success!"),s.val();console.log("No data available"),alert("No data available")}).catch(s=>{console.log(s),alert(s)})}const se=document.querySelector(".dbw");se.addEventListener("click",ne);function ne(){te([])}const ie=document.querySelector(".dbr");ie.addEventListener("click",oe);r.defaults.baseURL="https://books-backend.p.goit.global/books";const l={list:document.querySelector(".categories__list"),galleryList:document.querySelector(".gallery"),galleryTitle:document.querySelector(".gallery__title"),categoryList:document.querySelector(".gallery__category-list"),categoriesTitle:document.querySelector(".categories__title")},ae={categoriesList:"/category-list",topBooks:"/top-books",category:"/category",id:"/id"};async function D(e){return await r.get(""+e)}function le(e){D(e).then(t=>{const o=t.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),re(o)})}function re(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);l.list.insertAdjacentHTML("beforeend",t.join(""))}le(ae.categoriesList);l.list.addEventListener("click",ce);function ce(e){ue(e);let o=`/category?category=${e.target.textContent}`;D(o).then(s=>{const n=s.data;de(n)})}function de(e){const t=e.map(o=>{const{list_name:s}=o;return l.galleryTitle.textContent=s,ge(o)}).join("");l.categoryList.innerHTML=t,console.log("RENDER",t);}function ue(e){if(e.target.tagName==="LI"){const t=l.list.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}l.categoriesTitle.style.color="var(--text-color)"}function ge(e){const{book_image:t,author:o,title:s,_id:n}=e;return`<li class="gallery__card-item" id ="${n}" >
        <div class="gallery__image-box">
          <img class="gallery__card-image" src="${t}" alt="${s}" loading="lazy" width="180px"
          height="256px">
          <button class="gallery__card-quickviue js-modal-open" type="button" data-button="js-btn">
            QUICK VIEW
          </button>
        </div>
        <h3 class="gallery__card-title">${s}</h3>
        <p class="gallery__card-text">${o}</p>
      </li>`}const pe="https://books-backend.p.goit.global/books/";async function me(){const e=`${pe}top-books`;return(await r.get(e)).data}const he="https://books-backend.p.goit.global/books/";async function fe(e){const t=`${he}category?category=${e}`;return(await r.get(t)).data}const _=document.querySelector(".list_general");let m=0,w=window.innerWidth;w>=1440?m=5:w>=720?m=3:w>=240&&(m=1);me().then(e=>{console.log(e),ye(e)}).catch(e=>{j.Notify.failure("An error occurred while fetching images. Please try again.")});function be(){let e=this.getAttribute("data-my-attribute");fe(e).then(t=>{_.innerHTML="",ke(t)}).catch(t=>{j.Notify.failure("An error occurred while fetching images. Please try again.")})}function ye(e){window.scrollTo(0,0);const t=e.map(s=>{const n=s.books.slice(0,m).map(i=>`
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
    `}).join("");_.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",be)})}function ke(e){window.scrollTo(0,0);const o=`<div class='div_category'><ul class="list_five_general">${e.map(n=>`<li class="list_five_books">
        <img src="${n.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${n.title}</h2>
        <p class="text_general">${n.author}</p>
      </li>`).join("")}</ul>
  <button class="btn_back">BACK</button></div>`;_.insertAdjacentHTML("beforeend",o),document.querySelector(".btn_back").addEventListener("click",ve)}function ve(){location.reload()}const Le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],f=document.querySelector(".support-list");function we(e){return e.map(({title:t,url:o,img:s},n)=>`<li class="support-item">
        <span class='support-item-num'>0${n+1}</span>
        <a class="support-link" target='blank' href="${o}">
          <img
            class="support-img"
            src="${s}"
            alt="${t}"
          />
        </a>
      </li>`).join("")}f.innerHTML=we(Le);const h=document.querySelector(".support-slide-btn"),q=document.querySelector(".support-slide-down-btn"),C=document.querySelector(".support-slide-up-btn");h.addEventListener("click",_e);function _e(){h.classList.contains("top")?(h.classList.remove("top"),C.style.display="none",q.style.display="block",Se()):(Ee(),h.classList.add("top"),q.style.display="none",C.style.display="block")}function Se(){f.scrollTop=0}function Ee(){f.scrollTop=f.scrollHeight}r.defaults.baseURL="https://books-backend.p.goit.global/books/";async function U(e){const{data:t}=await r(e);return console.log(t),t}document.querySelector(".list");const A=document.querySelector("body"),p=[];document.addEventListener("click",Be);function Be(e){if(console.log(e),!e.target.closest(".users-list-item"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".users-list-item").dataset.id;console.log(o),U(o).then(s=>{console.log(p);const{_id:n,author:i,book_image:c,title:S,description:T,buy_links:$e}=s,E=K.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="./images/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${c}" alt="${S}" class="modal-img-book widht=192 height=281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${S}</h1>
          <h2 class="modal-book-autor">${i}</h2>
          <p class="modal-book-description">${T}</p>
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",B),A.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",B),A.style.overflow="auto"}});function B(v){const L="Escape";v.code===L&&E.close()}E.show();const $="booklist";p.push(s);const d=document.querySelector("#add"),u=document.querySelector("#remove"),k=document.querySelector(".txt-remove");U(o).then(v=>{const L=v.id;localStorage.getItem({idBook:L})!==null?(d.classList.add("hidden"),u.classList.remove("hidden")):(d.classList.remove("hidden"),u.classList.add("hidden"),k.classList.add("hidden")),d.addEventListener("click",()=>{localStorage.setItem($,JSON.stringify(p)),d.classList.add("hidden"),u.classList.remove("hidden"),k.classList.remove("hidden")}),u.addEventListener("click",()=>{localStorage.removeItem($,JSON.stringify(p)),d.classList.remove("hidden"),u.classList.add("hidden"),k.classList.add("hidden")})})})}
//# sourceMappingURL=commonHelpers.js.map
