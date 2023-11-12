import"./assets/burgerMenu-f48765b9.js";import{P as u}from"./assets/vendor-6ba42902.js";const c="booklist",o=document.querySelector(".cart-list"),i=document.querySelector(".empty-cart"),h=document.querySelector("#pagination"),y={totalItems:500,itemsPerPage:3,visiblePages:3,page:1,centerAlign:!1};new u(h,y);let t=[];document.addEventListener("click",f);try{t=JSON.parse(localStorage.getItem(c)),t.length||(i.style.display="block"),i.style.display="none",o.innerHTML=n(t),t.length>itemPerPage}catch(e){console.error("Get state error: ",e.message)}function n(e){return e.map(({_id:r,author:a,book_image:s,title:l,description:m,buy_links:[{url:d},{url:g}],list_name:p})=>` <li class="cart-item" data-id ="${r}">
            <img src="${s}" alt="${l}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${l}</h3>
                <p class="cart-item-category cart-item-label">${p}</p>
            </div>
                <p class="cart-item-description">${m}</p>
                <p class="cart-item-author cart-item-label">${a}</p>
                <button class="cart-item-delete">
                <svg class="cart-delete-icon" width="24" height="24">
                <use href="../img/icons-sprite.svg#cart-purple-round"></use>
                </svg>
                </button>
                <ul class="cart-item-links">
                <li><a href="${d}" class="cart-item-link">amazon</a></li>
                <li><a href="${g}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("")}function f(e){if(!e.target.classList.contains("cart-item-delete"))return;const r=e.target.closest(".cart-item").dataset.id;try{const a=t.filter(({_id:s})=>s!==r);localStorage.setItem(c,JSON.stringify(a)),t=JSON.parse(localStorage.getItem(c)),o.innerHTML=n(a)}catch(a){console.error("Get state error: ",a.message)}t.length||(i.style.display="block")}
//# sourceMappingURL=commonHelpers2.js.map
