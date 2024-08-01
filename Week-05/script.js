// script.js
let ArrProducts = [
    {
        id: 1,
        name: "Blue Hoodie",
        image: "image1.jpeg",
        price: 400.00,
        rating: 5
    },
    {
        id: 2,
        name: "Baker Webb",
        image: "image2.png",
        price: 420.00,
        rating: 5
    },
    {
        id: 3,
        name: "Harley Davidson Hoodie",
        image: "image3.jpeg",
        price: 330.00,
        rating: 5
    },
    {
        id: 4,
        name: "Vans Red Classic Hoodie",
        image: "image4.jpeg",
        price: 500.00,
        rating: 5
    }
];

let cart = [];
let cartCount = 0;
let totalCost = 0.0;

const products = document.querySelector(".products");
const cartIcon = document.getElementById("cartIcon");
const cartElement = document.getElementById("cartElement");
const closeCart = document.getElementById("closeCart");
const checkout = document.getElementById("checkout");

function onInIt() {
    ArrProducts.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}"/>
            <h3>${item.name}</h3>
            <p>Rs.${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to cart</button>
        `;

        products.appendChild(div);
    });
}

function addToCart(id) {
    const product = ArrProducts.find(item => item.id === id);
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    cartCount += 1;
    totalCost += product.price;
    updateCart();
}

function updateCart() {
    document.querySelector('.quantity').innerText = cartCount;
    document.getElementById('total-cost').innerText = totalCost.toFixed(2);

    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <div>
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <span>Rs.${(item.price * item.quantity).toFixed(2)}</span>
                
            </div>
        `;
    });
}

function changeQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            cartCount += delta;
            totalCost += delta * item.price;
            updateCart();
        }
    }
}

function removeFromCart(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        const item = cart[itemIndex];
        cartCount -= item.quantity;
        totalCost -= item.price * item.quantity;
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

cartIcon.addEventListener('click', () => {
    cartElement.classList.toggle('show');
});

closeCart.addEventListener('click', () => {
    cartElement.classList.toggle('show');
});

checkout.addEventListener('click', () => {
    alert('Checkout not implemented yet.');
});

onInIt();
