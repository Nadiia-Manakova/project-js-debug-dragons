(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../img/fund-09.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../img/fund-03.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../img/fund-07.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../img/fund-04.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../img/fund-05.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../img/fund-06.png"}],l=document.querySelector(".support-list");function a(s){return s.map(({title:r,url:n,img:i},e)=>`<li class="support-item">
        <span class='support-item-num'>0${e+1}</span>
        <a class="support-link" target='blank' href="${n}">
          <img
            class="support-img"
            src="${i}"
            alt="${r}"
          />
        </a>
      </li>`).join("")}l.innerHTML=a(u);
//# sourceMappingURL=commonHelpers.js.map
