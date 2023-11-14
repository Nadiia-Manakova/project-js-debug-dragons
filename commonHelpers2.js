import{s as w,h as L,w as S}from"./assets/support-b6682c92.js";import{P as M}from"./assets/vendor-23f73890.js";const d="booklist",m=document.querySelector("#pagination"),p=document.querySelector(".cart-list"),u=document.querySelector(".empty-cart"),$=window.innerWidth;let a=4,f=2;$>768&&(a=3,f=3);u.style.display="none";let t=[];w();try{t=JSON.parse(localStorage.getItem(d)),L(),t.length||(u.style.display="block"),t.length<=a&&(m.style.display="none"),p.innerHTML=h(t,1)}catch(e){console.error("Get state error: ",e.message)}const I={totalItems:t.length,itemsPerPage:a,visiblePages:f,page:1,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};let l=new M(m,I);document.addEventListener("click",T);l.on("afterMove",e=>{let s=e.page;p.innerHTML=h(t,s)});function h(e,s){p.innerHTML="";const i=a*(s-1),o=i+a;return e.slice(i,o).map(({_id:c,author:g,book_image:r,title:y,description:b,buy_links:[{url:k},{url:P}],list_name:v})=>` <li class="cart-item" data-id ="${c}">
            <img src="${r}" alt="${y}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${y}</h3>
                <p class="cart-item-category cart-item-label">${v}</p>
            </div>
                <p class="cart-item-description">${b}</p>
                <p class="cart-item-author cart-item-label">${g}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${k}" target="_blank" class="cart-item-link"><img src="./amazon.png" alt="amazon" widht="32" height="11" class="modal-img-shop cart-link-img-amazon"/></a></li>
                <li><a href="${P}" target="_blank" class="cart-item-link"><img src="./apple-books.png" alt="apple-books" widht="16" height="16" class="modal-img-shop cart-link-img-apple"/></a></li>
                </ul>
            </div>
        </li>`).join("")}function T(e){if(!e.target.closest(".cart-item-delete"))return;const s=e.target.closest(".cart-item").dataset.id;try{const i=t.findIndex(({_id:r})=>r===s),o=Math.floor(i/a+1),n=t.filter(({_id:r})=>r!==s);localStorage.setItem(d,JSON.stringify(n)),S(n),t=JSON.parse(localStorage.getItem(d));const c=Math.floor((n.length-1)/a+1);l.setTotalItems(n.length),l.reset(n.length),l.movePageTo(o>c?c:o),t.length<=a&&(m.style.display="none");let g=l.getCurrentPage();p.innerHTML=h(t,g)}catch(i){console.error("Get state error: ",i.message)}t.length||(u.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
