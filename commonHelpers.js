import{i as z,g as Y,o as V,c as X,u as Z,s as J,a as Q,b as x,d as ee,r as U,e as te,f as oe,h as m,N as I,j as se}from"./assets/vendor-24428245.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();const r={body:document.querySelector("body"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme"};function ne(){r.checkbox.checked===!0&&(localStorage.setItem(r.THEME_KEY,r.themeValueDark),r.body.classList.add("dark-theme")),r.checkbox.checked===!1&&(localStorage.getItem(r.THEME_KEY,r.themeValueLight),r.body.classList.remove("dark-theme"))}r.checkbox.addEventListener("click",ne);const ie={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"};z(ie);const a=Y(),i={signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".js-sign-out-btn"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop")};i.signInBtn.addEventListener("click",le);i.signUpBtn.addEventListener("click",re);i.signUpForm.addEventListener("submit",ae);i.signInForm.addEventListener("submit",ce);i.openModalBtn.addEventListener("click",y);i.closeModalBtn.addEventListener("click",y);i.exitBtn.addEventListener("click",ge);function y(){i.modal.classList.toggle("auth-backdrop-hidden")}function le(e){e.preventDefault(),i.signUpBox.classList.add("auth-hidden"),i.signInBox.classList.remove("auth-hidden"),i.signUpBtn.classList.remove("active"),i.signInBtn.classList.add("active")}function re(e){e.preventDefault(),i.signUpBox.classList.remove("auth-hidden"),i.signInBox.classList.add("auth-hidden"),i.signUpBtn.classList.add("active"),i.signInBtn.classList.remove("active")}function ae(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),de(o.email,o.password,o.username)}function ce(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),ue(o.email,o.password)}V(a,e=>{e?(e.displayName,e.email,e.photoURL,e.uid,console.log("User is signed in, we will show all modules")):console.log("User is signed out, we will hide some modules")});function de(e,t,o){X(a,e,t).then(()=>Z(a.currentUser,{displayName:o})).then(()=>{y(),console.log(`Welcome, ${o}!`)}).catch(s=>{const n=s.code,l=s.message;console.log(n,l)})}function ue(e,t){J(a,e,t).then(o=>{const s=o.user;console.log(`Welcome, ${s.displayName}!`),y()}).catch(o=>{const s=o.code,n=o.message;console.log(s,n)})}function ge(){Q(a).then(()=>{console.log("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`)})}function j(){const e=a.currentUser;if(e!==null){const t={name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};return console.log(t),t}else console.log('User is signed out. This function will return "undefined".')}function me(e){if(!e){console.log("No data to write!");return}const t=j();if(!t){console.log("User is not authorized!");return}const o=t.uid,s=x();ee(U(s,"users/"+o),{books:e}),console.log("Success!")}function pe(){const e=j();if(!e){console.log("User is not authorized!");return}const t=e.uid,o=U(x());te(oe(o,`users/${t}`)).then(s=>{if(s.exists())return console.log(s.val()),s.val();console.log("No data available")}).catch(s=>{console.log(s)})}const he=document.querySelector(".dbw");he.addEventListener("click",fe);function fe(){me([{list_name:"Advice How-To and Miscellaneous"},{list_name:"Audio Fiction",books:Array(5)},{list_name:"Audio Nonfiction",books:Array(5)},{list_name:"Business Books",books:Array(5)},{list_name:"Childrens Middle Grade Hardcover",books:Array(5)},{list_name:"Combined Print and E-Book Fiction",books:Array(5)}])}const be=document.querySelector(".dbr");be.addEventListener("click",pe);const N="https://books-backend.p.goit.global/books/";async function D(){const e=`${N}top-books`;return(await m.get(e)).data}const ye="https://books-backend.p.goit.global/books/";async function H(e){const t=`${ye}category?category=${e}`;return(await m.get(t)).data}async function ke(){const e=`${N}category-list`;return await m.get(e)}const Le=document.querySelector(".title_best_sellers"),k=document.querySelector(".list_general");let h=0,_=window.innerWidth;_>=1240?h=5:_>=720?h=3:_>=240&&(h=1);D().then(e=>{console.log(e),_e(e)}).catch(e=>{I.Notify.failure("An error occurred while fetching images. Please try again.")});function ve(){let e=this.getAttribute("data-my-attribute");H(e).then(t=>{Le.style.display="none",k.innerHTML="",R(t)}).catch(t=>{I.Notify.failure("An error occurred while fetching images. Please try again.")})}function we(e){return e.books.slice(0,h).map(t=>{let o=F(t),s=O(t);return`
      <li class="list_five_books" data-id="${t._id}">
        <img src="${t.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${o}</h2>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function Ee(e){return e.map(t=>{const o=we(t);return`
      <div class="div_five_books"><li class="list_five_books"
        <p class="text_general">${t.list_name}</p>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function _e(e){window.scrollTo(0,0);const t=Ee(e);k.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",ve)})}function Se(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function F(e){return e.title.length>17?e.title.substring(0,17)+"...":e.title}function O(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function Be(e){return e.map(t=>{let o=F(t),s=O(t);return`<li class="list_five_books">
        <img src="${t.book_image}" alt="" width = "180" height="256" />
        <h2 class="title_general">${o}</h2>
        <p class="text_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function Ae(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function R(e){window.scrollTo(0,0);const t=Be(e),o=Se(e),s=Ae(o,t);k.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",qe)}function qe(){location.reload()}const c={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(c.title);function $e(e){ke().then(t=>{const o=t.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),Ce(o)})}function Ce(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);c.filterListEl.insertAdjacentHTML("beforeend",t.join(""))}$e();c.filterListEl.addEventListener("click",Me);function Me(e){Te(e);const t=e.target.textContent;H(t).then(o=>{k.innerHTML="",R(o),c.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function Te(e){if(e.target.tagName==="LI"){const t=c.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}c.categoriesTitle.style.color="var(--text-color)"}const xe=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],b=document.querySelector(".support-list");function Ue(e){return e.map(({title:t,url:o,img:s},n)=>`<li class="support-item">
        <span class='support-item-num'>0${n+1}</span>
        <a class="support-link" target='blank' href="${o}">
          <img
            class="support-img"
            src="${s}"
            alt="${t}"
          />
        </a>
      </li>`).join("")}b.innerHTML=Ue(xe);const f=document.querySelector(".support-slide-btn"),q=document.querySelector(".support-slide-down-btn"),$=document.querySelector(".support-slide-up-btn");f.addEventListener("click",Ie);function Ie(){f.classList.contains("top")?(f.classList.remove("top"),$.style.display="none",q.style.display="block",je()):(Ne(),f.classList.add("top"),q.style.display="none",$.style.display="block")}function je(){b.scrollTop=0}function Ne(){b.scrollTop=b.scrollHeight}m.defaults.baseURL="https://books-backend.p.goit.global/books/";async function C(e){const{data:t}=await m(e);return console.log(t),t}document.querySelector(".list");const M=document.querySelector("body"),p=[];document.addEventListener("click",De);function De(e){if(console.log(e),!e.target.closest(".list_five_books"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".list_five_books").dataset.id;console.log(o),C(o).then(s=>{console.log(p);const{_id:n,author:l,book_image:d,title:S,description:G,buy_links:Re}=s,L=se.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="../img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${d}" alt="${S}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${S}</h1>
          <h2 class="modal-book-autor">${l}</h2>
          <p class="modal-book-description">${G}</p>
          <div class="modal-list-shops">
          <ul class="modal-book-list-shops">
            <li>
             <a href="" target="_blank" class="">
             <img crs="./img/amazon.png" alt="" widht="62" height="19"/> 
             </a>
            </li>
            <li>
             <a href="#" target="_blank" class="">
             <img crs="./img/apple-books.png" alt="" widht="62" height="19"/> 
             </a>
             </li>
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",B),M.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",B),M.style.overflow="auto"}});function B(w){const E="Escape";w.code===E&&L.close()}L.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{L.close()});const A="booklist";p.push(s);const u=document.querySelector("#add"),g=document.querySelector("#remove"),v=document.querySelector(".txt-remove");C(o).then(w=>{const E=w.id;localStorage.getItem({idBook:E})!==null?(u.classList.add("hidden"),g.classList.remove("hidden")):(u.classList.remove("hidden"),g.classList.add("hidden"),v.classList.add("hidden")),u.addEventListener("click",()=>{localStorage.setItem(A,JSON.stringify(p)),u.classList.add("hidden"),g.classList.remove("hidden"),v.classList.remove("hidden")}),g.addEventListener("click",()=>{localStorage.removeItem(A,JSON.stringify(p)),u.classList.remove("hidden"),g.classList.add("hidden"),v.classList.add("hidden")})})})}const P=document.querySelector(".hamburger"),T=document.querySelector(".hamburger-overlay"),He=document.querySelector("body"),K=document.querySelector(".mob-menu-gallery-list");P.addEventListener("click",Fe);function Fe(){P.classList.toggle("close"),T.classList.toggle("active"),He.classList.add("menu-open"),document.body.classList.toggle("menu-open",T.classList.contains("active"))}D().then(e=>{const o=e.reduce((s,n)=>s.concat(n.books),[]).map(s=>`
      <li class="mob-menu-gallery-item">
        <img class="mob-menu-image" src="${s.book_image}" alt="${s.title}" >
      </li>`).join("");K.insertAdjacentHTML("afterbegin",o),Oe()}).catch(e=>{console.log(e)});function W(e,t){e+=.2*t;const o=-1e3,s=0;(e<=o||e>=s)&&(t*=-1),K.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>{W(e,t)})}function Oe(){W(0,-1)}
//# sourceMappingURL=commonHelpers.js.map
