

// const productList = [
//   {
//     name: "Gamburger Prostoy",
//     price: 10000,
//     kkal: 700,
//     amount: 0,
//     get Summa() {
//       return this.price * this.amount;
//     },
//     get Kkal() {
//       return this.kkal * this.amount;
//     },
//   },
//   {
//     name: "Gamburger Fresh",
//     price: 20500,
//     kkal: 700,
//     amount: 0,
//     get Summa() {
//       return this.price * this.amount;
//     },
//     get Kkal() {
//       return this.kkal * this.amount;
//     },
//   },
//   {
//     name: "Fresh Combo",
//     price: 31900,
//     kkal: 1500,
//     amount: 0,
//     get Summa() {
//       return this.price * this.amount;
//     },
//     get Kkal() {
//       return this.kkal * this.amount;
//     },
//   },
// ];

// const extraProduct = {
//   doubleMayonnaise: {
//     price: 3000,
//     name: "Двойной майонез",
//     kkal: 200,
//   },
//   lettuce: {
//     price: 3000,
//     name: "Салатный лист",
//     kkal: 100,
//   },
//   cheese: {
//     price: 4000,
//     name: "Сыр",
//     kkal: 300,
//   },
// };

// const products = [...document.querySelectorAll(".main__product")],
//   bntPlusMinus = [...document.querySelectorAll(".main__product-btn")],
//   checkExtra = [...document.querySelectorAll(".main__product-checkbox")];

// bntPlusMinus.forEach((btn) => {
//   btn.addEventListener("click", plusMinus);
// });

// function plusMinus() {
//   const parent = this.closest(".main__product"), // тут родительская секция
//     parentIndex = products.indexOf(parent),
//     outAmount = parent.querySelector(".main__product-num"),
//     outPrice = parent.querySelector(".main__product-price span"),
//     outKkal = parent.querySelector(".main__product-call span"),
//     btnSymbol = this.getAttribute("data-symbol");

//   if (btnSymbol == "+") {
//     productList[parentIndex].amount++;
//   } else if (btnSymbol == "-" && productList[parentIndex].amount > 0) {
//     productList[parentIndex].amount--;
//   }
//   const { amount, Kkal, Summa } = productList[parentIndex];
//   outAmount.innerHTML = amount;
//   outPrice.innerHTML = Summa.toLocaleString();
//   outKkal.innerHTML = Kkal.toLocaleString();
// }

// checkExtra.forEach((checkbox) => {
//   checkbox.addEventListener("input", check);
// });

// function check() {
//   const parent = this.closest(".main__product"),
//     parentIndex = products.indexOf(parent),
//     outPrice = parent.querySelector(".main__product-price span"),
//     outKkal = parent.querySelector(".main__product-call span");
//   attr = this.getAttribute("data-extra");

//   if (this.checked) {
//     productList[parentIndex].price += extraProduct[attr].price;
//     productList[parentIndex].kkal += extraProduct[attr].kkal;
//   } else {
//     productList[parentIndex].price -= extraProduct[attr].price;
//     productList[parentIndex].kkal -= extraProduct[attr].kkal;
//   }

//   const { Summa, Kkal } = productList[parentIndex];
//   outPrice.innerHTML = Summa.toLocaleString();
//   outKkal.innerHTML = Kkal.toLocaleString();
// }

