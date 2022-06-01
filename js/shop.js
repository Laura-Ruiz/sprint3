
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

// Exercise 1

// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
//     let productLength = products.length;

//     for (let i = 0; i < productLength; i++) {
//         if (id == products[i].id) {
//             cartList.push(products[i]);
//         }
//     }
//     console.log(cartList);

//     calculateTotal();
//     generateCart();
//     productCounter();
// }

// function productCounter() {
//     let productCount = cartList.length;
//     console.log("productos comprados", productCount);
//     document.getElementById("count_product").innerHTML = productCount;
// }


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
            cart[i].subtotalWithDiscount = priceCupcake;
        }
        else {
            cart[i].subtotalWithDiscount = cart[i].price;
        }


    }
    console.log("cart con subtotal", cart);

}

function currency(price) {
    //return price.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})
    return price.toLocaleString('en-EN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
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
        //let totalWithDiscount = Number(cart[i].subtotalWithDiscount * quantity).toFixed(2);
        let totalWithDiscount = currency((cart[i].subtotalWithDiscount) * (quantity));


        document.getElementById("cart_list").innerHTML += `<tr>
        <th scope="row">${name}</th>
        <td>$${price}</td>
        <td>${quantity}</td>
        <td>$${totalWithDiscount}</td>
        <td><button class='btn btn-danger btn-sm' onclick='removeFromCart(${cart[i].id})'>X</button></td>
      </tr>`

        total += parseFloat(totalWithDiscount);
        document.getElementById("total_price").innerHTML = currency(total);
    }
    //!total && (total = 0);

}


// ** Nivell II **

// Exercise 7

function buy(id) {
    addToCart(id);
}

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    let productLength = products.length;
    let itemAddToCart;
    for (let i = 0; i < productLength; i++) {
        if (id == products[i].id) {
            itemAddToCart = products[i];

            let indexOfProduct = cart.indexOf(itemAddToCart);
            console.log(indexOfProduct);

            if (indexOfProduct === -1) {
                itemAddToCart.quantity = 1;
                cart.push(itemAddToCart);


            } else {
                cart[indexOfProduct].quantity += 1;
            }

            console.log(cart);

        }
    }
    //calculateTotalWithDiscount();
    productCounter();
}

function productCounter() {
    let totalProducts = 0;
    for (let i = 0; i < cart.length; i++) {
        totalProducts += cart[i].quantity;

    }
    document.getElementById("count_product").innerHTML = totalProducts;
}

//Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let productLength = products.length;

    document.getElementById("cart_list").innerHTML = "";

    for (let i = 0; i < productLength; i++) {

        if (id == products[i].id) {
            itemAddToCart = products[i];

            let indexOfProduct = cart.indexOf(itemAddToCart);

            if (indexOfProduct > -1) {

                if (cart[indexOfProduct].quantity > 1) {
                    cart[indexOfProduct].quantity--;
                    console.log(cart);
                } else {
                    cart.splice(indexOfProduct, 1);
                    console.log(cart)
                }
            }
        }

    }
    //calculateTotalWithDiscount();
    applyPromotionsCart(cart);
    printCart();

}

function open_modal() {
    console.log("Open Modal");
    applyPromotionsCart(cart)
    printCart();

}


//Show all products

function showAllProducts() {
    let section_1 = document.getElementById("allProducts_section-1");
    let section_2 = document.getElementById("allProducts_section-2");

    if (section_1.style.display === "none" && section_2.style.display === "none") {
        document.getElementById("text-boton").innerHTML = "Hide products"
        section_1.style.display = "block";
        section_2.style.display = "block";
    } else {
        document.getElementById("text-boton").innerHTML = "Show all products"
        section_1.style.display = "none"
        section_2.style.display = "none"
    }

}