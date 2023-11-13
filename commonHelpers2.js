import"./assets/burgerMenu-727be078.js";import{P as M}from"./assets/vendor-542f1b53.js";const u="booklist",d=document.querySelector("#pagination"),p=document.querySelector(".cart-list"),m=document.querySelector(".empty-cart"),S=window.innerWidth;let a=4,f=2;S>768&&(a=3,f=3);m.style.display="none";let t=[];try{t=JSON.parse(localStorage.getItem(u)),t.length||(m.style.display="block"),t.length<=a&&(d.style.display="none"),p.innerHTML=h(t,1)}catch(e){console.error("Get state error: ",e.message)}const $={totalItems:t.length,itemsPerPage:a,visiblePages:f,page:1,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};let l=new M(d,$);document.addEventListener("click",L);l.on("afterMove",e=>{let s=e.page;p.innerHTML=h(t,s)});function h(e,s){p.innerHTML="";const i=a*(s-1),o=i+a;return e.slice(i,o).map(({_id:c,author:g,book_image:r,title:y,description:b,buy_links:[{url:v},{url:P}],list_name:k})=>` <li class="cart-item" data-id ="${c}">
            <img src="${r}" alt="${y}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${y}</h3>
                <p class="cart-item-category cart-item-label">${k}</p>
            </div>
                <p class="cart-item-description">${b}</p>
                <p class="cart-item-author cart-item-label">${g}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${v}" class="cart-item-link">amazon</a></li>
                <li><a href="${P}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("")}function L(e){if(!e.target.closest(".cart-item-delete"))return;const s=e.target.closest(".cart-item").dataset.id;try{const i=t.findIndex(({_id:r})=>r===s),o=Math.floor(i/a+1),n=t.filter(({_id:r})=>r!==s);localStorage.setItem(u,JSON.stringify(n)),t=JSON.parse(localStorage.getItem(u));const c=Math.floor((n.length-1)/a+1);l.setTotalItems(n.length),l.reset(n.length),l.movePageTo(o>c?c:o),t.length<=a&&(d.style.display="none");let g=l.getCurrentPage();p.innerHTML=h(t,g)}catch(i){console.error("Get state error: ",i.message)}t.length||(m.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
