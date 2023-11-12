import{i as Z,g as Q,o as ee,c as te,u as oe,s as se,a as ne,b as j,d as ie,r as D,e as le,f as ae,h as p,N as H,j as re,P as ce}from"./vendor-1ac408a8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const de={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"};Z(de);const d=Q(),l={signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".js-sign-out-btn"),openModalBtn:document.querySelector(".auth-modal-open"),closeModalBtn:document.querySelector(".auth-modal-close"),modal:document.querySelector(".auth-modal-backdrop")};l.signInBtn.addEventListener("click",ue);l.signUpBtn.addEventListener("click",me);l.signUpForm.addEventListener("submit",ge);l.signInForm.addEventListener("submit",pe);l.openModalBtn.addEventListener("click",v);l.closeModalBtn.addEventListener("click",v);l.exitBtn.addEventListener("click",be);function v(){l.modal.classList.toggle("auth-backdrop-hidden")}function ue(e){e.preventDefault(),l.signUpBox.classList.add("auth-hidden"),l.signInBox.classList.remove("auth-hidden"),l.signUpBtn.classList.remove("active"),l.signInBtn.classList.add("active")}function me(e){e.preventDefault(),l.signUpBox.classList.remove("auth-hidden"),l.signInBox.classList.add("auth-hidden"),l.signUpBtn.classList.add("active"),l.signInBtn.classList.remove("active")}function ge(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),he(o.email,o.password,o.username)}function pe(e){e.preventDefault();const t=new FormData(e.currentTarget),o={};t.forEach((s,n)=>{o[n]=s}),fe(o.email,o.password)}ee(d,e=>{e?(e.displayName,e.email,e.photoURL,e.uid,console.log("User is signed in, we will show all modules")):console.log("User is signed out, we will hide some modules")});function he(e,t,o){te(d,e,t).then(()=>oe(d.currentUser,{displayName:o})).then(()=>{v(),console.log(`Welcome, ${o}!`)}).catch(s=>{const n=s.code,i=s.message;console.log(n,i)})}function fe(e,t){se(d,e,t).then(o=>{const s=o.user;console.log(`Welcome, ${s.displayName}!`),v()}).catch(o=>{const s=o.code,n=o.message;console.log(s,n)})}function be(){ne(d).then(()=>{console.log("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`)})}function O(){const e=d.currentUser;if(e!==null){const t={name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};return console.log(t),t}else console.log('User is signed out. This function will return "undefined".')}function ye(e){if(!e){console.log("No data to write!");return}const t=O();if(!t){console.log("User is not authorized!");return}const o=t.uid,s=j();ie(D(s,"users/"+o),{books:e}),console.log("Success!")}function ke(){const e=O();if(!e){console.log("User is not authorized!");return}const t=e.uid,o=D(j());le(ae(o,`users/${t}`)).then(s=>{if(s.exists())return console.log(s.val()),s.val();console.log("No data available")}).catch(s=>{console.log(s)})}const ve=document.querySelector(".dbw");ve.addEventListener("click",Le);function Le(){ye([{list_name:"Advice How-To and Miscellaneous"},{list_name:"Audio Fiction",books:Array(5)},{list_name:"Audio Nonfiction",books:Array(5)},{list_name:"Business Books",books:Array(5)},{list_name:"Childrens Middle Grade Hardcover",books:Array(5)},{list_name:"Combined Print and E-Book Fiction",books:Array(5)}])}const Se=document.querySelector(".dbr");Se.addEventListener("click",ke);const a={body:document.querySelector("body"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme"};function we(){a.checkbox.checked===!0&&(localStorage.setItem(a.THEME_KEY,a.themeValueDark),a.body.classList.add("dark-theme")),a.checkbox.checked===!1&&(localStorage.getItem(a.THEME_KEY,a.themeValueLight),a.body.classList.remove("dark-theme"))}a.checkbox.addEventListener("click",we);const P="https://books-backend.p.goit.global/books/";async function F(){const e=`${P}top-books`;return(await p.get(e)).data}const Ee="https://books-backend.p.goit.global/books/";async function R(e){const t=`${Ee}category?category=${e}`;return(await p.get(t)).data}async function _e(){const e=`${P}category-list`;return await p.get(e)}const Be=document.querySelector(".title_best_sellers"),L=document.querySelector(".list_general");let b=0,$=window.innerWidth;$>=996?b=5:$>=720?b=3:$>=240&&(b=1);F().then(e=>{console.log(e),Ce(e)}).catch(e=>{H.Notify.failure("An error occurred while fetching images. Please try again.")});function $e(){let e=this.getAttribute("data-my-attribute");R(e).then(t=>{Be.style.display="none",L.innerHTML="",W(t)}).catch(t=>{H.Notify.failure("An error occurred while fetching images. Please try again.")})}function Ae(e){return e.books.slice(0,b).map(t=>{let o=K(t),s=G(t);return`
      <li class="list_five_books" data-id="${t._id}">
        <img class="img_books" src="${t.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
      </li>
    `}).join("")}function qe(e){return e.map(t=>{const o=Ae(t);return`
      <div class="div_five_books"><li class="list_five_books">
        <h2 class="text_general">${t.list_name}</h2>
        <ul class="list_five_general">${o}</ul>
        <button class="btn" data-my-attribute="${t.list_name}">SEE MORE</button>
      </li></div>
    `}).join("")}function Ce(e){window.scrollTo(0,0);const t=qe(e);L.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".btn").forEach(s=>{s.addEventListener("click",$e)})}function Me(e){return e.slice(0,1).map(t=>t.list_name.split(" ").map(o=>`<span>${o}</span>`).join(" "))}function K(e){return e.title.length>17?e.title.substring(0,17)+"...":e.title}function G(e){return e.author.length>25?e.author.substring(0,25)+"...":e.author}function Te(e){return e.map(t=>{let o=K(t),s=G(t);return`<li class="list_five_books">
        <img class="img_books" src="${t.book_image}" alt=""/>
        <h3 class="title_general">${o}</h3>
        <p class="author_general">${s}</p>
        <h1 hidden>${t.list_name}</h1>
      </li>`}).join("")}function Ie(e,t){return`<div class='div_category'><h1 class="title-category">${e}</h1></><ul class="list_five_general">${t}</ul>
  <button class="btn_back">BACK</button></div>`}function W(e){window.scrollTo(0,0);const t=Te(e),o=Me(e),s=Ie(o,t);L.insertAdjacentHTML("beforeend",s),document.querySelector(".btn_back").addEventListener("click",Ue)}function Ue(){location.reload()}const u={galleryTitle:document.querySelector(".list_general-title"),filterListEl:document.querySelector(".categories__list"),categoriesTitle:document.querySelector(".categories__title"),title:document.querySelector(".title_best_sellers")};console.log(u.title);function xe(e){_e().then(t=>{const o=t.data;o.sort((s,n)=>s.list_name.localeCompare(n.list_name)),Ne(o)})}function Ne(e){const t=e.map(o=>`<li class="categories__list-item">${o.list_name}</li>`);u.filterListEl.insertAdjacentHTML("beforeend",t.join(""))}xe();u.filterListEl.addEventListener("click",je);function je(e){De(e);const t=e.target.textContent;R(t).then(o=>{L.innerHTML="",W(o),u.title.style.display="none"}).catch(o=>{Notiflix.Notify.failure("An error occurred while fetching images. Please try again.")})}function De(e){if(e.target.tagName==="LI"){const t=u.filterListEl.querySelector(".selected-category");t&&t.classList.remove("selected-category"),e.target.classList.add("selected-category")}u.categoriesTitle.style.color="var(--text-color)"}const He=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],k=document.querySelector(".support-list");function Oe(e){return e.map(({title:t,url:o,img:s},n)=>`<li class="support-item">
        <span class='support-item-num'>0${n+1}</span>
        <a class="support-link" target='blank' href="${o}">
          <img
            class="support-img"
            src="${s}"
            alt="${t}"
          />
        </a>
      </li>`).join("")}k.innerHTML=Oe(He);const y=document.querySelector(".support-slide-btn"),T=document.querySelector(".support-slide-down-btn"),I=document.querySelector(".support-slide-up-btn");y.addEventListener("click",Pe);function Pe(){y.classList.contains("top")?(y.classList.remove("top"),I.style.display="none",T.style.display="block",Fe()):(Re(),y.classList.add("top"),T.style.display="none",I.style.display="block")}function Fe(){k.scrollTop=0}function Re(){k.scrollTop=k.scrollHeight}p.defaults.baseURL="https://books-backend.p.goit.global/books/";async function U(e){const{data:t}=await p(e);return console.log(t),t}document.querySelector(".list");const x=document.querySelector("body"),f=[];document.addEventListener("click",Ke);function Ke(e){if(console.log(e),!e.target.closest(".list_five_books"))return;console.log(e.target),e.preventDefault();const o=e.target.closest(".list_five_books").dataset.id;console.log(o),U(o).then(s=>{console.log(f);const{_id:n,author:i,book_image:r,title:h,description:S,buy_links:Xe}=s,w=re.create(`
   <div class="modal-book-js" data-id="${n}">
          <button type="button" class="modal-book-btn-close">
          <svg class="icons-modal"  width="14" height="14">
          <use href="../img/icons-sprite.svg#x-close-btn"></use>
        </svg>
        </button>
          <img src="${r}" alt="${h}" class="modal-img-book widht="192" height="281"/>
          <div class="modal-list-infobook">
          <h1 class="modal-book-title">${h}</h1>
          <h2 class="modal-book-autor">${i}</h2>
          <p class="modal-book-description">${S}</p>
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
    </div>`,{onShow:()=>{document.addEventListener("keydown",C),x.style.overflow="hidden"},onClose:()=>{document.removeEventListener("keydown",C),x.style.overflow="auto"}});function C(_){const B="Escape";_.code===B&&w.close()}w.show(),document.querySelector(".modal-book-btn-close").addEventListener("click",()=>{w.close()});const M="booklist";f.push(s);const m=document.querySelector("#add"),g=document.querySelector("#remove"),E=document.querySelector(".txt-remove");U(o).then(_=>{const B=_.id;localStorage.getItem({idBook:B})!==null?(m.classList.add("hidden"),g.classList.remove("hidden")):(m.classList.remove("hidden"),g.classList.add("hidden"),E.classList.add("hidden")),m.addEventListener("click",()=>{localStorage.setItem(M,JSON.stringify(f)),m.classList.add("hidden"),g.classList.remove("hidden"),E.classList.remove("hidden")}),g.addEventListener("click",()=>{localStorage.removeItem(M,JSON.stringify(f)),m.classList.remove("hidden"),g.classList.add("hidden"),E.classList.add("hidden")})})})}const A="booklist",z=document.querySelector(".cart-list"),q=document.querySelector(".empty-cart"),Ge=document.querySelector("#pagination"),We={totalItems:500,itemsPerPage:3,visiblePages:3,page:1,centerAlign:!1};new ce(Ge,We);let c=[];document.addEventListener("click",ze);try{c=JSON.parse(localStorage.getItem(A)),c.length||(q.style.display="block"),q.style.display="none",z.innerHTML=Y(c),c.length>itemPerPage}catch(e){console.error("Get state error: ",e.message)}function Y(e){return e.map(({_id:t,author:o,book_image:s,title:n,description:i,buy_links:[{url:r},{url:h}],list_name:S})=>` <li class="cart-item" data-id ="${t}">
            <img src="${s}" alt="${n}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${n}</h3>
                <p class="cart-item-category cart-item-label">${S}</p>
            </div>
                <p class="cart-item-description">${i}</p>
                <p class="cart-item-author cart-item-label">${o}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${r}" class="cart-item-link">amazon</a></li>
                <li><a href="${h}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("")}function ze(e){if(!e.target.classList.contains("cart-item-delete"))return;const t=e.target.closest(".cart-item").dataset.id;try{const o=c.filter(({_id:s})=>s!==t);localStorage.setItem(A,JSON.stringify(o)),c=JSON.parse(localStorage.getItem(A)),z.innerHTML=Y(o)}catch(o){console.error("Get state error: ",o.message)}c.length||(q.style.display="block")}const V=document.querySelector(".hamburger"),N=document.querySelector(".hamburger-overlay"),Ye=document.querySelector("body"),J=document.querySelector(".mob-menu-gallery-list");V.addEventListener("click",Ve);function Ve(){V.classList.toggle("close"),N.classList.toggle("active"),Ye.classList.add("menu-open"),document.body.classList.toggle("menu-open",N.classList.contains("active"))}F().then(e=>{const o=e.reduce((s,n)=>s.concat(n.books),[]).map(s=>`
      <li class="mob-menu-gallery-item">
        <img class="mob-menu-image" src="${s.book_image}" alt="${s.title}" >
      </li>`).join("");J.insertAdjacentHTML("afterbegin",o),Je()}).catch(e=>{console.log(e)});function X(e,t){e+=.2*t;const o=-1e3,s=0;(e<=o||e>=s)&&(t*=-1),J.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>{X(e,t)})}function Je(){X(0,-1)}
//# sourceMappingURL=burgerMenu-cb1792af.js.map
