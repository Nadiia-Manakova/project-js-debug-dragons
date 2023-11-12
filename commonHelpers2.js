import"./assets/burgerMenu-0d40f939.js";import{P as k}from"./assets/vendor-e8a5e68e.js";const c="booklist",o=document.querySelector("#pagination"),l=document.querySelector(".cart-list"),p=document.querySelector(".empty-cart"),r=3,S=3;p.style.display="none";let t=[];try{t=JSON.parse(localStorage.getItem(c)),t.length||(p.style.display="block"),t.length<=r&&(o.style.display="none"),l.innerHTML=g(t,1)}catch(e){console.error("Get state error: ",e.message)}const $={totalItems:t.length,itemsPerPage:r,visiblePages:S,page:1,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};let i=new k(o,$);document.addEventListener("click",L);i.on("afterMove",e=>{let a=e.page;l.innerHTML=g(t,a),console.log("currentPage Global after :>> ",a)});function g(e,a){l.innerHTML="";const s=r*(a-1),n=s+r;return e.slice(s,n).map(({_id:d,author:y,book_image:h,title:m,description:f,buy_links:[{url:b},{url:v}],list_name:P})=>` <li class="cart-item" data-id ="${d}">
            <img src="${h}" alt="${m}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${m}</h3>
                <p class="cart-item-category cart-item-label">${P}</p>
            </div>
                <p class="cart-item-description">${f}</p>
                <p class="cart-item-author cart-item-label">${y}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${b}" class="cart-item-link">amazon</a></li>
                <li><a href="${v}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("")}function L(e){if(!e.target.closest(".cart-item-delete"))return;const a=e.target.closest(".cart-item").dataset.id;try{const s=t.filter(({_id:u})=>u!==a);localStorage.setItem(c,JSON.stringify(s)),t=JSON.parse(localStorage.getItem(c)),t.length<=r&&(o.style.display="none"),i.setTotalItems(t.length),i.reset(t.length);let n=i.getCurrentPage();l.innerHTML=g(t,n)}catch(s){console.error("Get state error: ",s.message)}t.length||(p.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
