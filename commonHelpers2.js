import"./assets/burgerMenu-83b980d7.js";import{P as k}from"./assets/vendor-e8a5e68e.js";const u="booklist",d=document.querySelector("#pagination"),p=document.querySelector(".cart-list"),m=document.querySelector(".empty-cart"),a=3,M=3;m.style.display="none";let t=[];try{t=JSON.parse(localStorage.getItem(u)),t.length||(m.style.display="block"),t.length<=a&&(d.style.display="none"),p.innerHTML=y(t,1)}catch(e){console.error("Get state error: ",e.message)}const S={totalItems:t.length,itemsPerPage:a,visiblePages:M,page:1,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};let l=new k(d,S);document.addEventListener("click",$);l.on("afterMove",e=>{let s=e.page;p.innerHTML=y(t,s)});function y(e,s){p.innerHTML="";const i=a*(s-1),c=i+a;return e.slice(i,c).map(({_id:o,author:g,book_image:r,title:h,description:f,buy_links:[{url:b},{url:v}],list_name:P})=>` <li class="cart-item" data-id ="${o}">
            <img src="${r}" alt="${h}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${h}</h3>
                <p class="cart-item-category cart-item-label">${P}</p>
            </div>
                <p class="cart-item-description">${f}</p>
                <p class="cart-item-author cart-item-label">${g}</p>
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
        </li>`).join("")}function $(e){if(!e.target.closest(".cart-item-delete"))return;const s=e.target.closest(".cart-item").dataset.id;try{const i=t.findIndex(({_id:r})=>r===s),c=Math.floor(i/a+1),n=t.filter(({_id:r})=>r!==s);localStorage.setItem(u,JSON.stringify(n)),t=JSON.parse(localStorage.getItem(u));const o=Math.floor((n.length-1)/a+1);l.setTotalItems(n.length),l.reset(n.length),l.movePageTo(c>o?o:c),t.length<=a&&(d.style.display="none");let g=l.getCurrentPage();p.innerHTML=y(t,g)}catch(i){console.error("Get state error: ",i.message)}t.length||(m.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
