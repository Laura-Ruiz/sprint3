
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let productLength = products.length;

    for (let i = 0; i < productLength; i++) {
        if (id == products[i].id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);

    calculateTotal();
    generateCart();
    productCount();
}

function productCount() {
    let productCount = cartList.length;
    console.log("productos comprados", productCount);
    document.getElementById("count_product").innerHTML = productCount;
}


// Exercise 2
function cleanCart() {
    cartList.length = 0;
    console.log(cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].price;
    }
    console.log("PrecioTotal", totalPrice);
}


// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    cart = [];

    let cloneCartList = [...cartList];
    let cartListLength = cloneCartList.length;

    for (let i = 0; i < cartListLength; i++) {

        let obj = cloneCartList[i];
        let indexOfProduct = cart.indexOf(obj);
        console.log("indice producto", indexOfProduct);

        if (indexOfProduct === -1) {
            cloneCartList[i].quantity = 1;
            cart.push(cloneCartList[i]);

        } else {
            cloneCartList[i].quantity += 1;
            console.log("valorQuantity", cloneCartList[i].quantity);
        }
    }

    console.log("nueva cart", cart);

    applyPromotionsCart(cart);
}


// Exercise 5
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == "cooking oil" && cart[i].quantity >= 3) {

            let priceCookinOil = 10;
            cart[i].subtotalWithDiscount = priceCookinOil;
        }
        else if (cart[i].name == "Instant cupcake mixture" && cart[i].quantity >= 10) {

            let priceCupcake = (2 / 3 * cart[i].price);
            cart[i].subtotalWithDiscount = priceCupcake.toFixed(2);
        }
        else {
            cart[i].subtotalWithDiscount = cart[i].price;
        }
    }
    console.log("cart con subtotal", cart);

}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    document.getElementById("cart_list").innerHTML = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let name = cart[i].name;
        let price = cart[i].price;
        let quantity = cart[i].quantity;
        let totalWithDiscount = cart[i].subtotalWithDiscount * quantity;

        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>$${price}</td>
        <td>${quantity}</td>
        <td>$${totalWithDiscount}</td>
      </tr>`

        total += totalWithDiscount;
    }

    document.getElementById("total_price").innerHTML = total
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}