import{r as E,g as B,c as _,d as F,i as R,e as W,s as d,o as z,f as K,u as G,h as V,j as Y,k as X,a as b}from"./vendor-23f73890.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const x=document.querySelector(".loader__backdrop");function Be(){x.style.display="block"}function xe(){setTimeout(()=>{x.style.display="none"},300)}const Z={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"},q=document.querySelector(".menu-sign-up-btn"),U=document.querySelector(".mob-menu-user"),I=document.querySelector(".mob-menu-user-buttons"),M=document.querySelector(".mob-menu-logout-container"),J=document.querySelector(".mob-menu-user-text"),T=document.querySelector(".header-hidden-auth-list"),D=document.querySelector(".header-logout-block"),C=document.querySelector(".header-login-overlay-block"),Q=document.querySelector(".header-overlay-user-name"),L="booklist";function ee(){const e=N();if(!e){console.log("User is not authorized!");return}const o=e.uid,n=E(B());_(F(n,`users/${o}`)).then(s=>{if(s.exists()){const{books:t}=s.val();localStorage.setItem(L,JSON.stringify(t))}else console.log("No data available.");console.log(JSON.parse(localStorage.getItem(L)))}).catch(s=>{console.log(s)})}function te(e){const{name:o,email:n,photo:s,uid:t}=e;q.classList.add("visually-hidden"),U.classList.remove("visually-hidden"),I.classList.remove("visually-hidden"),M.classList.remove("visually-hidden"),J.textContent=o,T.classList.remove("visually-hidden"),D.classList.add("visually-hidden"),C.classList.remove("visually-hidden"),Q.textContent=o,ee()}function oe(){q.classList.remove("visually-hidden"),U.classList.add("visually-hidden"),I.classList.add("visually-hidden"),M.classList.add("visually-hidden"),T.classList.add("visually-hidden"),D.classList.remove("visually-hidden"),C.classList.add("visually-hidden")}R(Z);const l=W(),a={modal:document.querySelector(".auth-modal-backdrop"),headerLogoutBlock:document.querySelector(".header-logout-block"),openModalBtnMobile:document.querySelector(".menu-sign-up-btn"),closeModalBtn:document.querySelector(".auth-modal-close"),signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".header-overlay-wrap"),exitBtnMobile:document.querySelector(".mob-menu-logout-btn")};a.signInBtn.addEventListener("click",se);a.signUpBtn.addEventListener("click",ne);a.signUpForm.addEventListener("submit",re);a.signInForm.addEventListener("submit",ie);a.openModalBtnMobile.addEventListener("click",u);a.headerLogoutBlock.addEventListener("click",u);a.closeModalBtn.addEventListener("click",u);a.exitBtn.addEventListener("click",A);a.exitBtnMobile.addEventListener("click",A);function u(){a.modal.classList.toggle("auth-backdrop-hidden")}function se(e){e.preventDefault(),a.signUpBox.classList.add("auth-hidden"),a.signInBox.classList.remove("auth-hidden"),a.signUpBtn.classList.remove("active"),a.signInBtn.classList.add("active")}function ne(e){e.preventDefault(),a.signUpBox.classList.remove("auth-hidden"),a.signInBox.classList.add("auth-hidden"),a.signUpBtn.classList.add("active"),a.signInBtn.classList.remove("active")}function re(e){e.preventDefault();const o=new FormData(e.currentTarget),n={};o.forEach((t,i)=>{n[i]=t});const s=n.username.trim();if(!s){console.log("Please enter your name!"),d("Please enter your name!",{icon:"warning"});return}ae(n.email,n.password,s)}function ie(e){e.preventDefault();const o=new FormData(e.currentTarget),n={};o.forEach((s,t)=>{n[t]=s}),le(n.email,n.password)}z(l,e=>{if(e){const o={name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};console.log("User is signed in!"),te(o)}else console.log("User is signed out!"),oe()});function ae(e,o,n){K(l,e,o).then(()=>G(l.currentUser,{displayName:n})).then(()=>{const s=document.querySelector(".header-overlay-user-name");s.textContent=n,u(),console.log(`Welcome, ${n}!`),d(`Welcome, ${n}!`,{icon:"success",buttons:!1,timer:2500})}).catch(s=>{const t=s.code,i=s.message;console.log(t,i),d(`Error! ${t}`,{icon:"error"})})}function le(e,o){V(l,e,o).then(n=>{const s=n.user;console.log(`Welcome, ${s.displayName}!`),d(`Welcome, ${s.displayName}!`,{icon:"success",buttons:!1,timer:2500}),u()}).catch(n=>{const s=n.code,t=n.message;console.log(s,t),d(`Error! ${s}`,{icon:"error"})})}function A(){Y(l).then(()=>{console.log("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`)}),location.href="./index.html"}function N(){const e=l.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};console.log("User is signed out.")}function qe(e){if(!e){console.log("No data to write.");return}const o=N();if(!o){console.log("User is not authorized.");return}const n=o.uid,s=B();X(E(s,"users/"+n),{books:e}),console.log("Shopping list was written to DB.")}const $="https://books-backend.p.goit.global/books/";async function ce(){const e=`${$}top-books`;return(await b.get(e)).data}const de="https://books-backend.p.goit.global/books/";async function Ue(e){const o=`${de}category?category=${e}`;return(await b.get(o)).data}async function Ie(){const e=`${$}category-list`;return await b.get(e)}const r={body:document.querySelector("body"),header:document.querySelector("header"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme",headerLoginBtn:".js-header-login",headerPageHome:document.querySelector(".header-hidden-auth-item"),headerPageShopping:document.querySelector(".header-hiddeh-auth-basket")},j=document.querySelector(".hamburger"),k=document.querySelector(".hamburger-overlay"),ue=document.querySelector("body"),P=document.querySelector(".mob-menu-gallery-list"),v=document.getElementById("scrollTop"),m=document.querySelector(".line-top"),g=document.querySelector(".line-middle"),h=document.querySelector(".line-bottom");j.addEventListener("click",me);function me(){j.classList.toggle("close"),k.classList.toggle("active"),ue.classList.add("menu-open"),document.body.classList.toggle("menu-open",k.classList.contains("active"))}ce().then(e=>{const s=e.reduce((t,i)=>t.concat(i.books),[]).filter((t,i,c)=>c.findIndex(O=>O.title===t.title)===i).map(t=>`
<li class="mob-menu-gallery-item">
    <img loading="lazy" class="mob-menu-image" src="${t.book_image}" alt="${t.title}" >
</li>`).join("");P.insertAdjacentHTML("afterbegin",s),ge()}).catch(e=>{console.log(e)});function ge(){H(0,-1)}function H(e,o){e+=.3*o;const n=-1500,s=0;(e<=n||e>=s)&&(o*=-1),P.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>{H(e,o)})}window.addEventListener("scroll",he);function he(){const e=document.documentElement.scrollTop>300;v.classList.toggle("show",e),v.onclick=o=>{o.preventDefault(),document.documentElement.scrollTop=0}}function y(){r.body.classList.contains("dark-theme")?(m.classList.remove("burger-line-color-dark"),m.classList.add("burger-line-color-light"),g.classList.remove("burger-line-color-dark"),g.classList.add("burger-line-color-light"),h.classList.remove("burger-line-color-dark"),h.classList.add("burger-line-color-light")):(m.classList.remove("burger-line-color-light"),m.classList.add("burger-line-color-dark"),g.classList.remove("burger-line-color-light"),g.classList.add("burger-line-color-dark"),h.classList.remove("burger-line-color-light"),h.classList.add("burger-line-color-dark"))}function pe(){r.checkbox.checked===!0&&(localStorage.setItem(r.THEME_KEY,r.themeValueDark),r.body.classList.add("dark-theme"),r.body.classList.remove("light-theme"),y()),r.checkbox.checked===!1&&(localStorage.setItem(r.THEME_KEY,r.themeValueLight),r.body.classList.add("light-theme"),r.body.classList.remove("dark-theme"),y())}function ye(){localStorage.getItem(r.THEME_KEY)===r.themeValueDark?(r.checkbox.checked=!0,r.body.classList.add("dark-theme"),r.body.classList.remove("light-theme"),y()):(r.checkbox.checked=!1,r.body.classList.add("light-theme"),r.body.classList.remove("dark-theme"),y())}const fe=()=>{const e=window.location.pathname;e==="/index.html"&&(r.headerPageHome.classList.add("header-yellow"),r.headerPageShopping.classList.remove("header-yellow")),e==="/page-2.html"&&(r.headerPageHome.classList.remove("header-yellow"),r.headerPageShopping.classList.add("header-yellow"))};fe();ye();r.checkbox.addEventListener("click",pe);const be=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/fund-01.png",img2x:"./img/fund-color-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/fund-02.png",img2x:"./img/fund-color-02.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/fund-03.png",img2x:"./img/fund-color-03.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/fund-04.png",img2x:"./img/fund-color-04.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/fund-07.png",img2x:"./img/fund-07.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/fund-06.png",img2x:"./img/fund-06.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/fund-05.png",img2x:"./img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/fund-08.png",img2x:"./img/fund-color-08.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png",img2x:"./img/united24_2x.png"}],f=document.querySelector(".support-list");function Le(e){return e.map(({title:o,url:n,img:s,img2x:t},i)=>`<li class="support-item">
        <span class='support-item-num'>0${i+1}</span>
        <a class="support-link" target='blank' href="${n}">
          <img
            class="support-img"
            src="${s}"
            srcset="${s} 1x, ${t} 2x"
            alt="${o}"
          />
        </a>
      </li>`).join("")}f.innerHTML=Le(be);const p=document.querySelector(".support-slide-btn"),S=document.querySelector(".support-slide-down-btn"),w=document.querySelector(".support-slide-up-btn");p.addEventListener("click",ke);function ke(){p.classList.contains("top")?(p.classList.remove("top"),w.style.display="none",S.style.display="block",ve()):(Se(),p.classList.add("top"),S.style.display="none",w.style.display="block")}function ve(){f.scrollTop=0}function Se(){f.scrollTop=f.scrollHeight}export{Ue as a,Ie as b,N as c,ce as g,xe as h,Be as s,qe as w};
//# sourceMappingURL=support-58f4db06.js.map
