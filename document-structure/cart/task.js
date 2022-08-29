const cartProduct = document.querySelector('.cart__products');
const productAdd = document.querySelectorAll('.product__add');
const productQuantity = document.querySelectorAll('.product__quantity-control');


for (let item of productQuantity) {
    item.addEventListener('click', () => {
        const productQuantityValue = item.parentElement.querySelector(".product__quantity-value");
        if (item.classList.contains("product__quantity-control_dec") && productQuantityValue.textContent != 1) {
            productQuantityValue.textContent--;
        } else if (item.classList.contains("product__quantity-control_inc")) {
            productQuantityValue.textContent++;
        };
    });
};


for (let item of productAdd) {
    item.addEventListener("click", () => {

       const Products = Array.from(cartProduct.getElementsByClassName('cart__product'));

        for (let element of Products) {
            if (element.dataset.id == item.closest(".product").dataset.id) {
                const value = Number(element.querySelector(".cart__product-count").textContent);
                const plusValue = Number(item.closest(".product").querySelector(".product__quantity-value").textContent.trim());

                element.querySelector(".cart__product-count").textContent = value + plusValue;
                localStorage.setItem("cartHTML", cartProduct.innerHTML);
            return;
            };
        };

        const product = item.closest(".product");
       
        const productQuantityValue = product.querySelector(".product__quantity-value").textContent.trim();
        cartProduct.insertAdjacentHTML("beforeend", 
            `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.querySelector(".product__image").getAttribute("src")}">
                <div class="cart__product-count">${productQuantityValue}</div>
            </div>`);
            
            });
};