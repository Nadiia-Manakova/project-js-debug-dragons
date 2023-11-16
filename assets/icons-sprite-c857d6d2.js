import{i as X,g as H,s as u,o as V,c as O,u as D,a as K,d as G,e as x,f as Y,r as E,h as W,j as J,k as A}from"./vendor-4b8b63a3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v=document.querySelector(".loader__backdrop");function Ve(){v.style.display="block"}function Oe(){setTimeout(()=>{v.style.display="none"},300)}const Z={apiKey:"AIzaSyC8186vhxW_ZDU8EVA4gnzNG0ku3rRXkNY",authDomain:"awesome-project-1330c.firebaseapp.com",projectId:"awesome-project-1330c",storageBucket:"awesome-project-1330c.appspot.com",messagingSenderId:"235904211325",appId:"1:235904211325:web:cd87abc5d9f719d2d41414",measurementId:"G-WDSXDZDNLB",databaseURL:"https://awesome-project-1330c-default-rtdb.europe-west1.firebasedatabase.app"},U=document.querySelector(".menu-sign-up-btn"),I=document.querySelector(".mob-menu-user"),w=document.querySelector(".mob-menu-user-buttons"),j=document.querySelector(".mob-menu-logout-container"),_=document.querySelector(".mob-menu-user-text"),P=document.querySelector(".header-hidden-auth-list"),C=document.querySelector(".header-logout-block"),S=document.querySelector(".header-login-overlay-block"),$=document.querySelector(".header-overlay-user-name");function ee(e){const{name:o,email:s,photo:n,uid:t}=e;U.classList.add("visually-hidden"),I.classList.remove("visually-hidden"),w.classList.remove("visually-hidden"),j.classList.remove("visually-hidden"),_.textContent=o,P.classList.remove("visually-hidden"),C.classList.add("visually-hidden"),S.classList.remove("visually-hidden"),$.textContent=o,ie()}function te(){U.classList.remove("visually-hidden"),I.classList.add("visually-hidden"),w.classList.add("visually-hidden"),j.classList.add("visually-hidden"),P.classList.add("visually-hidden"),C.classList.remove("visually-hidden"),S.classList.add("visually-hidden")}X(Z);const i=H(),c={modal:document.querySelector(".auth-modal-backdrop"),headerLogoutBlock:document.querySelector(".header-logout-block"),openModalBtnMobile:document.querySelector(".menu-sign-up-btn"),closeModalBtn:document.querySelector(".auth-modal-close"),signUpBox:document.querySelector(".js-sign-up"),signInBox:document.querySelector(".js-sign-in"),signUpForm:document.querySelector(".js-sign-up-form"),signInForm:document.querySelector(".js-sign-in-form"),signUpBtn:document.querySelector(".js-sign-up-link"),signInBtn:document.querySelector(".js-sign-in-link"),exitBtn:document.querySelector(".header-overlay-wrap"),exitBtnMobile:document.querySelector(".mob-menu-logout-btn")};c.signInBtn.addEventListener("click",oe);c.signUpBtn.addEventListener("click",se);c.signUpForm.addEventListener("submit",ne);c.signInForm.addEventListener("submit",re);c.openModalBtnMobile.addEventListener("click",g);c.headerLogoutBlock.addEventListener("click",g);c.closeModalBtn.addEventListener("click",g);c.exitBtn.addEventListener("click",q);c.exitBtnMobile.addEventListener("click",q);function g(){c.modal.classList.toggle("auth-backdrop-hidden")}function oe(e){e.preventDefault(),c.signUpBox.classList.add("auth-hidden"),c.signInBox.classList.remove("auth-hidden"),c.signUpBtn.classList.remove("active"),c.signInBtn.classList.add("active")}function se(e){e.preventDefault(),c.signUpBox.classList.remove("auth-hidden"),c.signInBox.classList.add("auth-hidden"),c.signUpBtn.classList.add("active"),c.signInBtn.classList.remove("active")}function ne(e){e.preventDefault();const o=new FormData(e.currentTarget),s={};o.forEach((t,r)=>{s[r]=t});const n=s.username.trim();if(!n){u("Please enter your name!",{icon:"warning"});return}ae(s.email,s.password,n)}function re(e){e.preventDefault();const o=new FormData(e.currentTarget),s={};o.forEach((n,t)=>{s[t]=n}),ce(s.email,s.password)}V(i,e=>{if(e){const o={name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};ee(o)}else te()});function ae(e,o,s){O(i,e,o).then(()=>D(i.currentUser,{displayName:s})).then(()=>{const n=document.querySelector(".header-overlay-user-name");n.textContent=s,g(),u(`Welcome, ${s}!`,{icon:"success",buttons:!1,timer:2e3})}).catch(n=>{const t=n.code,r=n.message;console.log(t,r),u(`${R(t)}`,{icon:"error"})})}function ce(e,o){K(i,e,o).then(s=>{const n=s.user;u(`Welcome, ${n.displayName}!`,{icon:"success",buttons:!1,timer:2e3}),g()}).catch(s=>{const n=s.code,t=s.message;console.log(n,t),u(`${R(n)}`,{icon:"error"})})}function q(){G(i).then(()=>{}).catch(e=>{console.log(`An error happened. ${e}`)}),location.href="./index.html"}function M(){const e=i.currentUser;if(e!==null)return{name:e.displayName,email:e.email,photo:e.photoURL,uid:e.uid};console.log("User is signed out.")}function De(e){if(!e){console.log("No data to write.");return}const o=M();if(!o){console.log("User is not authorized.");return}const s=o.uid,n=x();Y(E(n,"users/"+s),{books:e})}function ie(){const e="booklist",o=M();if(!o)return;const s=o.uid,n=E(x());W(J(n,`users/${s}`)).then(t=>{if(t.exists()){const{books:r}=t.val();localStorage.setItem(e,JSON.stringify(r))}else{const r=[];localStorage.setItem(e,JSON.stringify(r))}}).catch(t=>{console.log(t)})}function R(e){switch(e){case"auth/invalid-login-credentials":return"Invalid login credentials!";case"auth/email-already-in-use":return"The entered email is already in use!";case"auth/invalid-email":return"Incorrect E-Mail Address!";case"auth/weak-password":return"The entered password is weak!";case"auth/missing-password":return"Password not entered!";case"auth/too-many-requests":return"Too many requests! Try again later.";default:return`An error happened. Error code: ${e}`}}const N="https://books-backend.p.goit.global/books/";async function le(){const e=`${N}top-books`;return(await A.get(e)).data}const de="https://books-backend.p.goit.global/books/";async function Ke(e){const o=`${de}category?category=${e}`;return(await A.get(o)).data}async function Ge(){const e=`${N}category-list`;return await A.get(e)}A.defaults.baseURL="https://books-backend.p.goit.global/books/";async function Ye(e){const{data:o}=await A(e);return console.log(o),o}const a={body:document.querySelector("body"),header:document.querySelector("header"),checkbox:document.querySelector(".header-theme-checkbox"),THEME_KEY:"headerTheme",themeValueLight:"light-theme",themeValueDark:"dark-theme",headerLoginBtn:".js-header-login",headerPageHome:document.querySelector(".header-hidden-auth-item"),headerPageShopping:document.querySelector(".header-hiddeh-auth-basket")},f=document.querySelector(".hamburger-overlay"),T=document.querySelector(".hamburger"),ue=document.querySelector("body"),Q=document.querySelector(".mob-menu-gallery-list"),d=document.getElementById("scrollToTopBtn"),b=document.querySelector(".line-top"),k=document.querySelector(".line-middle"),y=document.querySelector(".line-bottom");T.addEventListener("click",Ae);function Ae(){T.classList.toggle("close"),f.classList.toggle("active"),ue.classList.add("menu-open"),document.body.classList.toggle("menu-open",f.classList.contains("active")),f.classList.contains("active")?d.classList.add("visually-hidden"):d.classList.remove("visually-hidden")}le().then(e=>{const n=e.reduce((t,r)=>t.concat(r.books),[]).filter((t,r,l)=>l.findIndex(F=>F.title===t.title)===r).map(t=>`
<li class="mob-menu-gallery-item">
    <img loading="lazy" class="mob-menu-image" src="${t.book_image}" alt="${t.title}" >
</li>`).join("");Q.insertAdjacentHTML("afterbegin",n),ge()}).catch(e=>{console.log(e)});function ge(){z(0,-1)}function z(e,o){e+=.3*o;const s=-1500,n=0;(e<=s||e>=n)&&(o*=-1),Q.style.transform=`translateX(${e}px)`,requestAnimationFrame(()=>z(e,o))}function h(){a.body.classList.contains("dark-theme")?(b.classList.replace("burger-line-color-dark","burger-line-color-light"),k.classList.replace("burger-line-color-dark","burger-line-color-light"),y.classList.replace("burger-line-color-dark","burger-line-color-light")):(b.classList.replace("burger-line-color-light","burger-line-color-dark"),k.classList.replace("burger-line-color-light","burger-line-color-dark"),y.classList.replace("burger-line-color-light","burger-line-color-dark"))}window.addEventListener("scroll",me);function me(){document.documentElement.scrollTop>400?d.classList.add("show"):d.classList.remove("show"),d.onclick=e=>{e.preventDefault(),document.documentElement.scrollTop=0}}function he(){a.checkbox.checked===!0&&(localStorage.setItem(a.THEME_KEY,a.themeValueDark),a.body.classList.add("dark-theme"),a.body.classList.remove("light-theme"),h()),a.checkbox.checked===!1&&(localStorage.setItem(a.THEME_KEY,a.themeValueLight),a.body.classList.add("light-theme"),a.body.classList.remove("dark-theme"),h())}function pe(){localStorage.getItem(a.THEME_KEY)===a.themeValueDark?(a.checkbox.checked=!0,a.body.classList.add("dark-theme"),a.body.classList.remove("light-theme"),h()):(a.checkbox.checked=!1,a.body.classList.add("light-theme"),a.body.classList.remove("dark-theme"),h())}const fe=()=>{const e=window.location.pathname;e==="/index.html"&&(a.headerPageHome.classList.add("header-yellow"),a.headerPageShopping.classList.remove("header-yellow")),e==="/page-2.html"&&(a.headerPageHome.classList.remove("header-yellow"),a.headerPageShopping.classList.add("header-yellow"))};fe();pe();a.checkbox.addEventListener("click",he);const be="/project-js-debug-dragons/assets/fund_01-48d0bbd4.png",ke="/project-js-debug-dragons/assets/fund_color_01-4fcced94.png",ye="/project-js-debug-dragons/assets/fund_02-07b3c5b9.png",Le="/project-js-debug-dragons/assets/fund_color_02-a4a5b3a7.png",Be="/project-js-debug-dragons/assets/fund_03-25add069.png",xe="/project-js-debug-dragons/assets/fund_color_03-01c65509.png",Ee="/project-js-debug-dragons/assets/fund_04-cb562572.png",ve="data:image/png;base64,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",Ue="/project-js-debug-dragons/assets/fund_07-f3cebede.png",Ie="/project-js-debug-dragons/assets/fund_color_07-c744effb.png",we="/project-js-debug-dragons/assets/fund_06-d38a7a75.png",je="/project-js-debug-dragons/assets/fund_color_06-4709f9f3.png",Pe="/project-js-debug-dragons/assets/fund_05-53677e14.png",Ce="/project-js-debug-dragons/assets/fund_color_05-484eb835.png",Se="/project-js-debug-dragons/assets/fund_08-d1ef46aa.png",qe="/project-js-debug-dragons/assets/fund_color_08-a524fce2.png",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVOSURBVHgB7Zl5rF1TFMY/Q6nh1dRnTNUQBBFDEwRVVAxBEWOlEUKUP0pNNaa5CYkxEkJNiSmIEPOcEBFqiCE1S5VEEE8rtKqqT73X9XXt03vfeXufc+6QtK/5fsmXe+/Z+5yzz9lrrb3WvoAQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII0RnWgFhd2Nw0znSQaYxpe9MmpuGmPtM/prmm2ab3TG+bPjD9V3BN2sdJpj1QzGum97Mfa4fPTQtOWGRaErnZCNNaiXMWh2sPQ5p/4Q+av24X6uOKjYX3HJ5oXxqUam+Fv0wbmtZE6/wPH/sItEYv/F31Rdo4rtNMNdPOifP5zrqCdjQdHcb0qukK09eJ604zTTeth2LmI2JUbxWccK3pxdyxbtNjcO/I02+63nSY6UCk4YOcb1rQcGx9032mXRPn3Ax/cSck2ul59MQz0TkuM11l2gyt86npbtP9aA0aFaMMn++NcL3M0fmOb4fPSTPQ0I41bWA6HAMNlgbFZ64h7eCl9BdoUqT/KFNPoj8HdxbcC/pL9BLcezL4/eOC/heZHi1of8V0S4X7NqMzTL+1eY03TeM7NB5GrOfhqwsn/OVEPxrdZ3AjnGmaVzBf+zbMAQ2qBl8W833nJ65xMXIXWJkcY7oHvryIanApOg4e+Zgz7Rbp8yc8Ch1smmA6wnSI6fdIX6Yc24XvjF5c8q7E4Aj1gOkhVKDl0NZBGAkYgidh6MG88FYMzg3z/ATPYVIw3/ojd4wTzGgUyw9pCDQapiVMQ7py7b/CoxOddS/ToUGx3JmRZk643w3w1WCdhnZGvDvg0esaVGBVMCpyPNzzpqN9njV9EznOlzslcQ5fHHOIhZG2b5GGE8GJ60+0X4d6dXUA0vxgOhK+vGRwbhiFnkA9kjTC/HNP0+UNxxjFWPkxR3o8tI9GusrnuLl8fmm60TQVg23iLrhBlTnOgIETrquppTCWoNIz1kWaPhTDHKU7d89T4V5ZVmmU8Qm8ZM5zMtJGxYrxKdPPkbatkIbV7dSCdnp+Ucmewcll1FucO/4hPBqlxj0qfDKyTIQXPnujeG4In3eW6WnTnaYTTZdgsA0wgm5kuin83j9xPZ6/Q/g+JTMqls0bJ07gPsWT8JBKOPGTw81isFJZgGL4MHzZF6LuRXwxnPilEI2MLGjrDe23wdOI2BYPHZxzNzvoo6Bf4LkX22mcsaDCtOQclDM2iKwwKnr3+IITvoOXsXyI3U1bIg1D+CwUQ6/k/sjfpqsxMDyvKktyFRhZuL3Rk2in4zGqLym5DleDUzBw+eV72Afu1Ck+N80I58bG9hy8UpyXaxuJurH2osNkE/gIvFJIbVbSYseiGsxpfqzQjxGpBn+48zA0d/cZtfnuyqLru/D9txTbmO5FczCFoDGn9uyYRkwMKoIGx3yqyjLNaBaLhixCVqQ8mVE9A9+K59pdth4XwYpjWhP9ORnZHsdkDD3oCFtU6NeNzjoN3xsjPRP5YWgfJvXvVOh3gensyHFuCz2c/ciMistQDb7EsbRn+Vk1YWb4/ML0AjwUL0RzMExfCveAcyGKYOJMx+WeEQuLGegMPUgv4Y2kouL38DxtOTHv4VK3tWkn07bwv2K4NO4Hj2JfmV6HJ3pc5lgOzw1qhBuboxGHO70zc8dYmrOK6EIaLiP0+l0S7RwP/9yM7QmxOjkqcR5DP/d7YmUznet0tFeVsqqkw05A82SVIZPtOeFzUWgbB89x24FO/WDFvrSBMZHjrLbL8mghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQoiVzzITxmEj/3YK3AAAAABJRU5ErkJggg==",Re="data:image/png;base64,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",Ne=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:be,img2x:ke},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:ye,img2x:Le},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:Be,img2x:xe},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:Ee,img2x:ve},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:Ue,img2x:Ie},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:we,img2x:je},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:Pe,img2x:Ce},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:Se,img2x:qe},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:Me,img2x:Re}],p=document.querySelector(".support-list");function Te(e){return e.map(({title:o,url:s,img:n,img2x:t},r)=>`<li class="support-item">
        <span class='support-item-num'>0${r+1}</span>
        <a class="support-link" target='blank' href="${s}">
          <img
            class="support-img"
            src="${n}"
            srcset="${n} 1x, ${t} 2x"
            alt="${o}"
          />
        </a>
      </li>`).join("")}p.innerHTML=Te(Ne);const m=document.querySelector(".support-slide"),L=document.querySelector(".support-slide-down-btn"),B=document.querySelector(".support-slide-up-btn");m.addEventListener("click",Qe);function Qe(){m.classList.contains("top")?(m.classList.remove("top"),B.style.display="none",L.style.display="block",ze()):(Fe(),m.classList.add("top"),L.style.display="none",B.style.display="block")}function ze(){p.scrollTop=0}function Fe(){p.scrollTop=p.scrollHeight}const We="/project-js-debug-dragons/assets/amazon-4f53fde0.png",Je="data:image/png;base64,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",Ze="/project-js-debug-dragons/assets/icons-sprite-1d11e0ff.svg";export{Ke as a,Ge as b,Ye as c,M as d,Ze as e,We as f,le as g,Oe as h,Je as i,Ve as s,De as w};
//# sourceMappingURL=icons-sprite-c857d6d2.js.map
