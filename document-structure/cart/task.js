const quantities = Array.from(document.getElementsByClassName('product__quantity-control'));

quantities.forEach(element => {
    element.addEventListener('click', (event) => {
        let quantity = element.parentElement.querySelector('.product__quantity-value');
        if (element.classList.contains('product__quantity-control_dec') && quantity.textContent > 1) {
            quantity.textContent--;
        }
        if (element.classList.contains('product__quantity-control_inc')) {
            quantity.textContent++;
        }
    })
});

const productAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');

productAdd.forEach(element => {
    element.addEventListener('click', (event) => {
        let product = element.closest('.product');
        let cardId = product.dataset.id;
        let cardImg = product.querySelector('.product__image').getAttribute('src');
        let quantity = product.querySelector('.product__quantity-value').textContent;

        if (cartProducts.querySelector('.cart__product')) {
            let item = Array.from(cartProducts.querySelectorAll('.cart__product')).find(item => item.dataset.id == cardId)
            if (item) {
                item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(quantity);
                console.log(cardId);
            } else {
                AddToCart();
            }
        } else {
            AddToCart();
        }

        function AddToCart() {
            cartProducts.innerHTML +=
                `<div class="cart__product" data-id=${cardId}>
            <img class="cart__product-image" src=${cardImg}>
            <div class="cart__product-count">${quantity}</div>
        </div>`
        }
    })
})