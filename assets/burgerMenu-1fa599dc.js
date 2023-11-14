import{r as L,g as k,c as j,d as P,i as $,e as H,o as O,f as _,u as F,s as R,h as W,j as z,a as g}from"./vendor-36465543.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const v=document.querySelector(".loader__backdrop");function Le(){v.style.display="block"}function ke(){setTimeout(()=>{v.style.display="none"},300)}const G={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"},S=document.querySelector(".menu-sign-up-btn"),w=document.querySelector(".mob-menu-user"),B=document.querySelector(".mob-menu-user-buttons"),E=document.querySelector(".mob-menu-logout-container"),K=document.querySelector(".mob-menu-user-text"),q=document.querySelector(".header-hidden-auth-list"),x=document.querySelector(".header-logout-block"),U=document.querySelector(".header-login-overlay-block"),V=document.querySelector(".header-overlay-user-name"),p="booklist";function Y(){const e=M();if(!e){console.log("User is not authorized!");return}const t=e.uid,n=L(k());j(P(n,`users/${t}`)).then(s=>{if(s.exists()){const{books:o}=s.val();localStorage.setItem(p,JSON.stringify(o))}else console.log("No data available");console.log(JSON.parse(localStorage.getItem(p)))}).catch(s=>{console.log(s)})}function X(e){const{name:t,email:n,photo:s,uid:o}=e;S.classList.add("visually-hidden"),w.classList.remove("visually-hidden"),B.classList.remove("visually-hidden"),E.classList.remove("visually-hidden"),K.textContent=t,q.classList.remove("visually-hidden"),x.classList.add("visually-hidden"),U.classList.remove("visually-hidden"),V.textContent=t,Y()}function Z(){S.classList.remove("visually-hidden"),w.classList.add("visually-hidden"),B.classList.add("visually-hidden"),E.classList.add("visually-hidden"),q.classList.add("visually-hidden"),x.classList.remove("visually-hidden"),U.classList.add("visually-hidden")}$(G);const l=H(),r={modal:document.querySelector(".auth-modal-backdrop"),headerLogoutBlock:document.querySelector(".header-logout-block"),openModalBtnMobile:document.querySelector(".menu-sign-up-btn"),closeModalBtn:document.querySelector(".auth-modal-close"),signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".header-overlay-wrap"),exitBtnMobile:document.querySelector(".mob-menu-logout-btn")};r.signInBtn.addEventListener("click",J);r.signUpBtn.addEventListener("click",Q);r.signUpForm.addEventListener("submit",ee);r.signInForm.addEventListener("submit",te);r.openModalBtnMobile.addEventListener("click",d);r.headerLogoutBlock.addEventListener("click",d);r.closeModalBtn.addEventListener("click",d);r.exitBtn.addEventListener("click",I);r.exitBtnMobile.addEventListener("click",I);function d(){r.modal.classList.toggle("auth-backdrop-hidden")}function J(e){e.preventDefault(),r.signUpBox.classList.add("auth-hidden"),r.signInBox.classList.remove("auth-hidden"),r.signUpBtn.classList.remove("active"),r.signInBtn.classList.add("active")}function Q(e){e.preventDefault(),r.signUpBox.classList.remove("auth-hidden"),r.signInBox.classList.add("auth-hidden"),r.signUpBtn.classList.add("active"),r.signInBtn.classList.remove("active")}function ee(e){e.preventDefault();const t=new FormData(e.currentTarget),n={};if(t.forEach((o,i)=>{n[i]=o}),!n.username.trim()){console.log("Please enter your name!");return}oe(n.email,n.password,n.username)}function te(e){e.preventDefault();const t=new FormData(e.currentTarget),n={};t.forEach((s,o)=>{n[o]=s}),ne(n.email,n.password)}O(l,e=>{if(e){const t={name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};console.log("User is signed in!"),X(t)}else console.log("User is signed out!"),Z()});function oe(e,t,n){_(l,e,t).then(()=>F(l.currentUser,{displayName:n})).then(()=>{d(),console.log(`Welcome, ${n}!`)}).catch(s=>{const o=s.code,i=s.message;console.log(o,i)})}function ne(e,t){R(l,e,t).then(n=>{const s=n.user;console.log(`Welcome, ${s.displayName}!`),d()}).catch(n=>{const s=n.code,o=n.message;console.log(s,o)})}function I(){W(l).then(()=>{console.log("Sign-out successful.")}).catch(e=>{console.log(`An error happened. ${e}`)}),location.href="./index.html"}function M(){const e=l.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};console.log('User is signed out. This function will return "undefined".')}function ve(e){if(!e){console.log("No data to write!");return}const t=M();if(!t){console.log("User is not authorized!");return}const n=t.uid,s=k();z(L(s,"users/"+n),{books:e}),console.log("Success!")}const a={body:document.querySelector("body"),header:document.querySelector("header"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme",headerLoginBtn:".js-header-login",headerPageHome:document.querySelector(".header-hidden-auth-item"),headerPageShopping:document.querySelector(".header-hiddeh-auth-basket")};function se(){a.checkbox.checked===!0&&(localStorage.setItem(a.THEME_KEY,a.themeValueDark),a.body.classList.add("dark-theme")),a.checkbox.checked===!1&&(localStorage.getItem(a.THEME_KEY,a.themeValueDark),a.body.classList.add("dark-theme"))}const ie=()=>{const e=window.location.pathname;e==="/index.html"&&(a.headerPageHome.classList.add("header-yellow"),a.headerPageShopping.classList.remove("header-yellow")),e==="/page-2.html"&&(a.headerPageHome.classList.remove("header-yellow"),a.headerPageShopping.classList.add("header-yellow"))};a.checkbox.addEventListener("click",se);ie();const T="https://books-backend.p.goit.global/books/";async function re(){const e=`${T}top-books`;return(await g.get(e)).data}const ae="https://books-backend.p.goit.global/books/";async function Se(e){const t=`${ae}category?category=${e}`;return(await g.get(t)).data}async function we(){const e=`${T}category-list`;return await g.get(e)}const le=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/fund-01.png",img2x:"./img/fund-color-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/fund-02.png",img2x:"./img/fund-color-02.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/fund-03.png",img2x:"./img/fund-color-03.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/fund-04.png",img2x:"./img/fund-color-04.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/fund-07.png",img2x:"./img/fund-07.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/fund-06.png",img2x:"./img/fund-06.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/fund-05.png",img2x:"./img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/fund-08.png",img2x:"./img/fund-color-08.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png",img2x:"./img/united24_2x.png"}],m=document.querySelector(".support-list");function ce(e){return e.map(({title:t,url:n,img:s,img2x:o},i)=>`<li class="support-item">
        <span class='support-item-num'>0${i+1}</span>
        <a class="support-link" target='blank' href="${n}">
          <img
            class="support-img"
            src="${s}"
            srcset="${s} 1x, ${o} 2x"
            alt="${t}"
          />
        </a>
      </li>`).join("")}m.innerHTML=ce(le);const u=document.querySelector(".support-slide-btn"),h=document.querySelector(".support-slide-down-btn"),y=document.querySelector(".support-slide-up-btn");u.addEventListener("click",de);function de(){u.classList.contains("top")?(u.classList.remove("top"),y.style.display="none",h.style.display="block",ue()):(me(),u.classList.add("top"),h.style.display="none",y.style.display="block")}function ue(){m.scrollTop=0}function me(){m.scrollTop=m.scrollHeight}const D=document.querySelector(".hamburger"),f=document.querySelector(".hamburger-overlay"),ge=document.querySelector("body"),A=document.querySelector(".mob-menu-gallery-list"),b=document.getElementById("scrollTop");document.querySelector(".line-top");document.querySelector(".line-middle");document.querySelector(".line-bottom");D.addEventListener("click",pe);function pe(){D.classList.toggle("close"),f.classList.toggle("active"),ge.classList.add("menu-open"),document.body.classList.toggle("menu-open",f.classList.contains("active"))}re().then(e=>{const s=e.reduce((o,i)=>o.concat(i.books),[]).filter((o,i,c)=>c.findIndex(N=>N.title===o.title)===i).map(o=>`
<li class="mob-menu-gallery-item">
    <img loading="lazy" class="mob-menu-image" src="${o.book_image}" alt="${o.title}" >
</li>`).join("");A.insertAdjacentHTML("afterbegin",s),he()}).catch(e=>{console.log(e)});function he(){C(0,-1)}function C(e,t){e+=.3*t;const n=-1500,s=0;(e<=n||e>=s)&&(t*=-1),A.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>{C(e,t)})}window.addEventListener("scroll",ye);function ye(){const e=document.documentElement.scrollTop>300;b.classList.toggle("show",e),b.onclick=t=>{t.preventDefault(),document.documentElement.scrollTop=0}}export{Se as a,we as b,M as c,re as g,ke as h,Le as s,ve as w};
//# sourceMappingURL=burgerMenu-1fa599dc.js.map
