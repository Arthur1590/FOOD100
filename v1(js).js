// const product = {
//   plainBurger: {
//     name: "Гамбургер простой",
//     price: 10000,
//     img: "images/product1.jpg",
//     amount: 0,
//     doubleMayonnaise: 0,
//     lettuce: 0,
//     cheese: 0,
//     get totalSum() {
//       return (
//         this.price * this.amount +
//         extraProduct.doubleMayonnaise.price * this.doubleMayonnaise +
//         extraProduct.lettuce.price * this.lettuce +
//         extraProduct.cheese.price * this.cheese
//       );
//     },
//   },
//   freshBurger: {
//     name: "Гамбургер FRESH",
//     price: 20500,
//     img: "images/product2.jpg",
//     amount: 0,
//     doubleMayonnaise: 0,
//     lettuce: 0,
//     cheese: 0,
//     get totalSum() {
//       return (
//         this.price * this.amount +
//         extraProduct.doubleMayonnaise.price * this.doubleMayonnaise +
//         extraProduct.lettuce.price * this.lettuce +
//         extraProduct.cheese.price * this.cheese
//       );
//     },
//   },
//   freshCombo: {
//     name: "FRESH COMBO",
//     price: 31900,
//     img: "images/product3.jpg",
//     amount: 0,
//     doubleMayonnaise: 0,
//     lettuce: 0,
//     cheese: 0,
//     get totalSum() {
//       return (
//         this.price * this.amount +
//         extraProduct.doubleMayonnaise.price * this.doubleMayonnaise +
//         extraProduct.lettuce.price * this.lettuce +
//         extraProduct.cheese.price * this.cheese
//       );
//     },
//   },
// };

// const extraProduct = {
//   doubleMayonnaise: {
//     name: "doubleMayonnaise",
//     price: 7500,
//   },
//   lettuce: {
//     name: "lettuce",
//     price: 6000,
//   },
//   cheese: {
//     name: "cheese",
//     price: 4000,
//   },
// };

// const summBtn = document.querySelectorAll(".main__product-btn"),
//   modalParent = document.querySelector(".receipt"),
//   btnModal = document.querySelector(".addCart"),
//   checkList = document.querySelector(".receipt__window-out"),
//   order = document.querySelector(".order__counter"),
//   sumExtra = document.querySelectorAll(".main__product-checkbox");

// btnModal.addEventListener("click", function () {
//   modalParent.classList.toggle("active");
// });

// summBtn.forEach((sumBtn) => {
//   sumBtn.addEventListener("click", function () {
//     minusOrPlus(this);
//   });
// });

// function minusOrPlus(sumBtn) {
//   let parent = sumBtn.closest(".main__product"),
//     parentId = parent.getAttribute("id");
//   const sumAttr = sumBtn.getAttribute("data-symbol");
//   if (sumAttr == "+") {
//     product[parentId].amount++;
//   } else if (sumAttr == "-" && product[parentId].amount > 0) {
//     product[parentId].amount--;
//   }

//   totalSummAndCount(parentId);
//   basket();
// }

// sumExtra.forEach((checkbox) => {
//   checkbox.addEventListener("click", function () {
//     const parentId = checkbox.closest(".main__product").id;
//     const extraName = checkbox.getAttribute("data-extra");

//     if (checkbox.checked) {
//       product[parentId][extraName]++;
//     } else {
//       if (product[parentId][extraName] > 0) {
//         product[parentId][extraName]--;
//       }
//     }

//     totalSummAndCount(parentId);
//     basket();
//   });
// });

// function totalSummAndCount(parentId) {
//   let parent = document.getElementById(parentId);
//   const productData = product[parentId];

//   parent.querySelector(".main__product-num").innerHTML = productData.amount;
//   parent.querySelector(".main__product-price span").innerHTML =
//     productData.totalSum;
// }

// function basket() {
//   const productArray = [];

//   let total = 0;

//   for (const data in product) {
//     const po = product[data];
//     if (po.amount > 0) {
//       total += po.totalSum;
//       productArray.push(po);
//     }
//   }

//   checkList.innerHTML = "";
//   for (let i = 0; i < productArray.length; i++) {
//     checkList.innerHTML += card(productArray[i]);
//   }

//   order.innerHTML = `Сумма к оплате: ${total} сум`;
// }

// function card(data) {
//   return `
//   <div>
//   <span>${data.name}</span> x <span>${data.amount}</span> - <span>${data.totalSum}</span>
//   </div>
//   `;
// }