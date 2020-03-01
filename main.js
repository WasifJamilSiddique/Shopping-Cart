

const cart1Plus = document.getElementById("cart1-plus");
cart1Plus.addEventListener("click", function(){
    document.getElementById("cart1-input").value++;
    const cart1Price = document.getElementById("cart1-price").innerText;
    const cart1PriceNumber = parseFloat(cart1Price) + 1219;
    document.getElementById("cart1-price").innerText = cart1PriceNumber;
    document.getElementById("subtotal").innerText = cart1PriceNumber;
    document.getElementById("total").innerText = cart1PriceNumber;
})

const cart1Minus = document.getElementById("cart1-minus");
cart1Minus.addEventListener("click", function(){
    if (document.getElementById("cart1-input").value>0){
        document.getElementById("cart1-input").value--;
        const cart1Price = document.getElementById("cart1-price").innerText;
        const cart1PriceNumber = parseFloat(cart1Price) - 1219;
        document.getElementById("cart1-price").innerText = cart1PriceNumber;
        //const subtotalNumber = parseFloat(document.getElementById("subtotal").innerText);
        //const totalNumber = parseFloat(document.getElementById("total").innerText);
        document.getElementById("subtotal").innerText -= 1219;
        document.getElementById("total").innerText -=  1219;
    }else{
        document.getElementById("cart1-input").value = 0;
        document.getElementById("cart1-price").innerText = 0;
        document.getElementById("subtotal").innerText = 0;
        document.getElementById("total").innerText = 0;
    }
})

const cart2Plus = document.getElementById("cart2-plus");
cart2Plus.addEventListener("click", function () {
    document.getElementById("cart2-input").value++;
    const cart2Price = document.getElementById("cart2-price").innerText;
    const cart2PriceNumber = parseFloat(cart2Price) + 59;
    const subtotalNumber = parseFloat(document.getElementById("subtotal").innerText);
    //const totalNumber = parseFloat(document.getElementById("total").innerText);
    document.getElementById("cart2-price").innerText = cart2PriceNumber;
    document.getElementById("subtotal").innerText = cart2PriceNumber + subtotalNumber;
    document.getElementById("total").innerText = cart2PriceNumber + subtotalNumber;
})

const cart2Minus = document.getElementById("cart2-minus");
cart2Minus.addEventListener("click", function () {
    if (document.getElementById("cart2-input").value > 0) {
        document.getElementById("cart2-input").value--;
        const cart2Price = document.getElementById("cart2-price").innerText;
        const cart2PriceNumber = parseFloat(cart2Price) - 59;
        document.getElementById("cart2-price").innerText = cart2PriceNumber;
        document.getElementById("subtotal").innerText -= cart2PriceNumber
        document.getElementById("total").innerText -= cart2PriceNumber;
    } else {
        document.getElementById("cart2-input").value = 0;
        document.getElementById("cart2-price").innerText = 0;
    }
})

const firstCart = document.getElementById("first-cart");
const firstCartRemove = document.getElementById("first-cart-remove");
firstCartRemove.addEventListener("click", function(){
    firstCart.style.display = "none";
})

const secondCart = document.getElementById("second-cart");
const secondCartRemove = document.getElementById("second-cart-remove");
secondCartRemove.addEventListener("click", function(){
    secondCart.style.display = "none";
})

const checkoutBtn = document.getElementById("check-button");
const mainSection = document.getElementById("mainSection");
const smsg = document.getElementById("successfulMsg");
const formSection = document.getElementById("form-section");
checkoutBtn.addEventListener("click", function(){
    mainSection.style.display = "none";
    smsg.style.display = "block";
})

const formSubmit = document.getElementById("formSubmit");
formSubmit.addEventListener("click", function(){
    formSection.style.display = "none";
    mainSection.style.display = "block";
})


