/* =========================================
   ONLINE GROCERY SHOPPING MANAGEMENT SYSTEM
   ========================================= */


/* PRODUCT DATA */

let products = [

    // FRUITS
    {id: 1, name: "Apple", category: "Fruits", price: 120, emoji: "🍎"},
    {id: 2, name: "Banana", category: "Fruits", price: 60, emoji: "🍌"},
    {id: 3, name: "Orange", category: "Fruits", price: 90, emoji: "🍊"},
    {id: 4, name: "Mango", category: "Fruits", price: 150, emoji: "🥭"},
    {id: 5, name: "Grapes", category: "Fruits", price: 100, emoji: "🍇"},
    {id: 6, name: "Watermelon", category: "Fruits", price: 80, emoji: "🍉"},
    {id: 7, name: "Papaya", category: "Fruits", price: 70, emoji: "🥭"},
    {id: 8, name: "Pomegranate", category: "Fruits", price: 180, emoji: "🍎"},
    {id: 9, name: "Pineapple", category: "Fruits", price: 100, emoji: "🍍"},
    {id: 10, name: "Guava", category: "Fruits", price: 80, emoji: "🍐"},
    {id: 11, name: "Strawberry", category: "Fruits", price: 200, emoji: "🍓"},
    {id: 12, name: "Kiwi", category: "Fruits", price: 180, emoji: "🥝"},
    {id: 13, name: "Muskmelon", category: "Fruits", price: 90, emoji: "🍈"},
    {id: 14, name: "Lemon", category: "Fruits", price: 50, emoji: "🍋"},
    {id: 15, name: "Coconut", category: "Fruits", price: 60, emoji: "🥥"},


    // VEGETABLES
    {id: 16, name: "Tomato", category: "Vegetables", price: 50, emoji: "🍅"},
    {id: 17, name: "Potato", category: "Vegetables", price: 45, emoji: "🥔"},
    {id: 18, name: "Carrot", category: "Vegetables", price: 60, emoji: "🥕"},
    {id: 19, name: "Onion", category: "Vegetables", price: 55, emoji: "🧅"},
    {id: 20, name: "Brinjal", category: "Vegetables", price: 50, emoji: "🍆"},
    {id: 21, name: "Cabbage", category: "Vegetables", price: 40, emoji: "🥬"},
    {id: 22, name: "Cauliflower", category: "Vegetables", price: 60, emoji: "🥦"},
    {id: 23, name: "Spinach", category: "Vegetables", price: 30, emoji: "🌿"},
    {id: 24, name: "Capsicum", category: "Vegetables", price: 90, emoji: "🫑"},
    {id: 25, name: "Beetroot", category: "Vegetables", price: 50, emoji: "🥕"},
    {id: 26, name: "Cucumber", category: "Vegetables", price: 40, emoji: "🥒"},
    {id: 27, name: "Green Peas", category: "Vegetables", price: 100, emoji: "🫛"},
    {id: 28, name: "Garlic", category: "Vegetables", price: 120, emoji: "🧄"},
    {id: 29, name: "Ginger", category: "Vegetables", price: 100, emoji: "🫚"},
    {id: 30, name: "Pumpkin", category: "Vegetables", price: 45, emoji: "🎃"},


    // DAIRY
    {id: 31, name: "Milk", category: "Dairy", price: 60, emoji: "🥛"},
    {id: 32, name: "Curd", category: "Dairy", price: 50, emoji: "🥣"},
    {id: 33, name: "Butter", category: "Dairy", price: 55, emoji: "🧈"},
    {id: 34, name: "Cheese", category: "Dairy", price: 120, emoji: "🧀"},
    {id: 35, name: "Paneer", category: "Dairy", price: 100, emoji: "🧀"},
    {id: 36, name: "Ghee", category: "Dairy", price: 180, emoji: "🫙"},
    {id: 37, name: "Buttermilk", category: "Dairy", price: 30, emoji: "🥛"},
    {id: 38, name: "Lassi", category: "Dairy", price: 45, emoji: "🥤"},
    {id: 39, name: "Cream", category: "Dairy", price: 90, emoji: "🥛"},
    {id: 40, name: "Milk Powder", category: "Dairy", price: 250, emoji: "🥛"},
    {id: 41, name: "Flavoured Milk", category: "Dairy", price: 40, emoji: "🥛"},
    {id: 42, name: "Greek Yogurt", category: "Dairy", price: 110, emoji: "🥣"},
    {id: 43, name: "Fresh Yogurt", category: "Dairy", price: 60, emoji: "🥣"},
    {id: 44, name: "Mozzarella", category: "Dairy", price: 150, emoji: "🧀"},
    {id: 45, name: "Condensed Milk", category: "Dairy", price: 100, emoji: "🥛"},


    // GRAINS
    {id: 46, name: "Rice", category: "Grains", price: 70, emoji: "🍚"},
    {id: 47, name: "Wheat", category: "Grains", price: 50, emoji: "🌾"},
    {id: 48, name: "Toor Dal", category: "Grains", price: 130, emoji: "🫘"},
    {id: 49, name: "Moong Dal", category: "Grains", price: 120, emoji: "🫘"},
    {id: 50, name: "Urad Dal", category: "Grains", price: 140, emoji: "🫘"},
    {id: 51, name: "Chana Dal", category: "Grains", price: 100, emoji: "🫘"},
    {id: 52, name: "Ragi", category: "Grains", price: 80, emoji: "🌾"},
    {id: 53, name: "Oats", category: "Grains", price: 110, emoji: "🥣"},
    {id: 54, name: "Millet", category: "Grains", price: 100, emoji: "🌾"},
    {id: 55, name: "Quinoa", category: "Grains", price: 180, emoji: "🌾"},
    {id: 56, name: "Poha", category: "Grains", price: 70, emoji: "🍚"},
    {id: 57, name: "Sooji", category: "Grains", price: 60, emoji: "🌾"},
    {id: 58, name: "Corn Flour", category: "Grains", price: 80, emoji: "🌽"},
    {id: 59, name: "Besan", category: "Grains", price: 90, emoji: "🌾"},
    {id: 60, name: "Barley", category: "Grains", price: 100, emoji: "🌾"},


    // GROCERY
    {id: 61, name: "Cooking Oil", category: "Grocery", price: 150, emoji: "🫗"},
    {id: 62, name: "Sugar", category: "Grocery", price: 50, emoji: "🧂"},
    {id: 63, name: "Salt", category: "Grocery", price: 25, emoji: "🧂"},
    {id: 64, name: "Tea Powder", category: "Grocery", price: 140, emoji: "🍵"},
    {id: 65, name: "Coffee Powder", category: "Grocery", price: 180, emoji: "☕"},
    {id: 66, name: "Black Pepper", category: "Grocery", price: 200, emoji: "🌶️"},
    {id: 67, name: "Chilli Powder", category: "Grocery", price: 120, emoji: "🌶️"},
    {id: 68, name: "Turmeric Powder", category: "Grocery", price: 90, emoji: "🟡"},
    {id: 69, name: "Coriander Powder", category: "Grocery", price: 100, emoji: "🌿"},
    {id: 70, name: "Chickpeas", category: "Grocery", price: 100, emoji: "🫘"},
    {id: 71, name: "Biscuits", category: "Grocery", price: 40, emoji: "🍪"},
    {id: 72, name: "Bread", category: "Grocery", price: 45, emoji: "🍞"},
    {id: 73, name: "Jam", category: "Grocery", price: 100, emoji: "🍓"},
    {id: 74, name: "Honey", category: "Grocery", price: 180, emoji: "🍯"},
    {id: 75, name: "Noodles", category: "Grocery", price: 60, emoji: "🍜"}
];


let cart = [];
let orders = [];


/* DISPLAY PRODUCTS */

function displayProducts(list = products) {

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML =
            "<p class='empty'>No products found.</p>";
        return;
    }

    list.forEach(product => {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.emoji}
            </div>

            <h3>${product.name}</h3>

            <p class="category">
                ${product.category}
            </p>

            <p class="price">
                ₹${product.price}
            </p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        container.appendChild(card);
    });
}


/* ADD TO CART */

function addToCart(id) {

    let product = products.find(p => p.id === id);

    let existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();

    alert(product.name + " added to cart!");
}


/* UPDATE CART COUNT */

function updateCartCount() {

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    document.getElementById("cartCount").textContent = count;
}


/* OPEN CART */

function openCart() {

    document.getElementById("cartModal").style.display = "block";

    displayCart();
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartModal").style.display = "none";
}


/* DISPLAY CART */

function displayCart() {

    let container = document.getElementById("cartItems");

    container.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        container.innerHTML =
            "<p class='empty'>Your cart is empty.</p>";

        document.getElementById("cartTotal").textContent = "0";

        return;
    }


    cart.forEach(item => {

        let itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div class="cart-item-info">

                <span class="cart-item-emoji">
                    ${item.emoji}
                </span>

                <div>
                    <strong>${item.name}</strong>

                    <br>

                    ₹${item.price} × ${item.quantity}

                </div>

            </div>


            <div class="quantity">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span> ${item.quantity} </span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

                <button
                    onclick="removeFromCart(${item.id})"
                    style="margin-left:8px;background:#d32f2f;">
                    ×
                </button>

            </div>
        `;

        container.appendChild(div);
    });


    document.getElementById("cartTotal").textContent =
        total;
}


/* INCREASE */

function increaseQuantity(id) {

    let item = cart.find(i => i.id === id);

    item.quantity++;

    displayCart();

    updateCartCount();
}


/* DECREASE */

function decreaseQuantity(id) {

    let item = cart.find(i => i.id === id);

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        removeFromCart(id);

        return;
    }

    displayCart();

    updateCartCount();
}


/* REMOVE */

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    displayCart();

    updateCartCount();
}


/* SEARCH */

function searchProducts() {

    let search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let result = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(search)

    );

    displayProducts(result);
}


/* CATEGORY FILTER */

function filterCategory(category) {

    document.getElementById("categoryFilter").value =
        category;

    if (category === "All") {

        displayProducts(products);

        return;
    }

    let result = products.filter(product =>
        product.category === category
    );

    displayProducts(result);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let total = 0;

    cart.forEach(item => {

        total +=
            item.price * item.quantity;
    });


    let order = {

        id:
            "ORD" +
            Math.floor(Math.random() * 100000),

        date:
            new Date().toLocaleString(),

        items:
            JSON.parse(JSON.stringify(cart)),

        total:
            total,

        status:
            "Order Placed"
    };


    orders.push(order);

    cart = [];

    updateCartCount();

    closeCart();

    displayOrders();

    alert(
        "Order placed successfully!\n\n" +
        "Order ID: " +
        order.id +
        "\n" +
        "Total Amount: ₹" +
        order.total
    );
}


/* DISPLAY ORDERS */

function displayOrders() {

    let container =
        document.getElementById("orderContainer");

    container.innerHTML = "";

    if (orders.length === 0) {

        container.innerHTML =
            "<p class='empty'>No orders placed yet.</p>";

        return;
    }


    orders.forEach(order => {

        let itemsText = "";

        order.items.forEach(item => {

            itemsText +=
                `${item.name} × ${item.quantity}<br>`;
        });


        let div =
            document.createElement("div");

        div.className = "order-card";

        div.innerHTML = `

            <h3>
                Order ID: ${order.id}
            </h3>

            <p>
                <strong>Date:</strong>
                ${order.date}
            </p>

            <p>
                <strong>Products:</strong><br>
                ${itemsText}
            </p>

            <p>
                <strong>Total:</strong>
                ₹${order.total}
            </p>

            <br>

            <span class="status">
                ${order.status}
            </span>
        `;

        container.appendChild(div);
    });
}


/* ADMIN ADD PRODUCT */

function addProduct() {

    let name =
        document.getElementById("productName").value;

    let category =
        document.getElementById("productCategory").value;

    let price =
        document.getElementById("productPrice").value;

    let emoji =
        document.getElementById("productEmoji").value;


    if (
        name === "" ||
        price === ""
    ) {

        alert("Please enter product name and price.");

        return;
    }


    let newProduct = {

        id:
            Date.now(),

        name:
            name,

        category:
            category,

        price:
            Number(price),

        emoji:
            emoji || "🛒"
    };


    products.push(newProduct);

    displayProducts(products);


    document.getElementById("productName").value = "";

    document.getElementById("productPrice").value = "";

    document.getElementById("productEmoji").value = "";


    alert(
        "Product added successfully!"
    );
}


/* SCROLL TO PRODUCTS */

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* INITIAL LOAD */

displayProducts(products);

updateCartCount();

displayOrders();