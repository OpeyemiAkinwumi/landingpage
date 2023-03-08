const nav = document.querySelector('.links');
const openNavBtn = document.querySelector('#open');
const closeNavBtn = document.querySelector('#close')

const openNav = () =>{
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block'
}
const closeNav = () =>{
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
}

openNavBtn.addEventListener('click', openNav);

closeNavBtn.addEventListener('click', closeNav);




let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let price = document.querySelector('.price');
let lessThan = document.querySelector('.arrow1');
let greatThan = document.querySelector(".arrow2")
let amount = document.querySelector('.amount')
let picture = document.querySelector('.can')
let drink = document.querySelector('.ene')



let product = [
    {
        drink: "Toxic",
        pic: "web3.png",
        price: 10
    },
    {
        drink: "Sweet",
        pic: "ash.png",
        price: 9
    },
    {
        drink: "Energy",
        pic: "web1.png",
        price: 12
    }
 ]

let count = 0;
let index = 0

// price.textContent = product[index].price

function toxic() {
    let index = 0
    drink.textContent = product[index].drink;
    picture.src = product[index].pic;
    price.textContent = product[index].price;


}
function sweet() {
    let index = 1
    drink.textContent = product[index].drink;
    picture.src = product[index].pic;
    price.textContent = product[index].price;
    
}
function energy() {
    let index = 2
    drink.textContent = product[index].drink;
    picture.src = product[index].pic;
    price.textContent = product[index].price;

}


function decrease() {
    count--;
    if (count < 1){
        count = 1;
    }else {
        amount.textContent = count;
    }
    // price.textContent = product[index].price
   totalOrder()
}

function increase() {
    count++;
    amount.textContent = count;
    totalOrder()
}

function totalOrder() {
    // price.textContent = product[index].price;
    coolprice = product[index].price;
    total = count * coolprice;
    price.textContent = total;
    console.log( parseInt(price.textContent))
}

console.log(parseInt(price.textContent))