import{s as $,h as w,e as L,f as I,i as S,w as M}from"./assets/icons-sprite-2fd0df84.js";import{P as T}from"./assets/vendor-4b8b63a3.js";const d="booklist",m=document.querySelector("#pagination"),p=document.querySelector(".cart-list"),u=document.querySelector(".empty-cart"),C=window.innerWidth;let a=4,f=2;C>768&&(a=3,f=3);u.style.display="none";let t=[];$();try{t=JSON.parse(localStorage.getItem(d)),w(),t.length||(u.style.display="block"),t.length<=a&&(m.style.display="none"),p.innerHTML=h(t,1)}catch(e){console.error("Get state error: ",e.message)}const O={totalItems:t.length,itemsPerPage:a,visiblePages:f,page:1,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};let l=new T(m,O);document.addEventListener("click",B);l.on("afterMove",e=>{let s=e.page;p.innerHTML=h(t,s)});function h(e,s){p.innerHTML="";const i=a*(s-1),o=i+a;return e.slice(i,o).map(({_id:c,author:g,book_image:n,title:y,description:b,buy_links:[{url:k},{url:P}],list_name:v})=>` <li class="cart-item" data-id ="${c}">
            <img src="${n}" alt="${y}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${y}</h3>
                <p class="cart-item-category cart-item-label">${v}</p>
            </div>
                <p class="cart-item-description">${b}</p>
                <p class="cart-item-author cart-item-label">${g}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="${L}#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${k}" target="_blank" class="cart-item-link"><img src="${I}" alt="amazon" widht="32" height="11" class="modal-img-shop cart-link-img-amazon"/></a></li>
                <li><a href="${P}" target="_blank" class="cart-item-link"><img src="${S}" alt="apple-books" widht="16" height="16" class="modal-img-shop cart-link-img-apple"/></a></li>
                </ul>
            </div>
        </li>`).join("")}function B(e){if(!e.target.closest(".cart-item-delete"))return;const s=e.target.closest(".cart-item").dataset.id;try{const i=t.findIndex(({_id:n})=>n===s),o=Math.floor(i/a+1),r=t.filter(({_id:n})=>n!==s);localStorage.setItem(d,JSON.stringify(r)),M(r),t=JSON.parse(localStorage.getItem(d));const c=Math.floor((r.length-1)/a+1);l.setTotalItems(r.length),l.reset(r.length),l.movePageTo(o>c?c:o),t.length<=a&&(m.style.display="none");let g=l.getCurrentPage();p.innerHTML=h(t,g)}catch(i){console.error("Get state error: ",i.message)}t.length||(u.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
