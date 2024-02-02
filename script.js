const productList = [
  {
    name: "Гамбургер простой",
    price: 10000,
    kkal: 700,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kkal() {
      return this.kkal * this.amount;
    },
  },
  {
    name: "Гамбургер FRESH",
    price: 20500,
    kkal: 500,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kkal() {
      return this.kkal * this.amount;
    },
  },
  {
    name: "FRESH COMBO",
    price: 31900,
    kkal: 1500,
    amount: 0,
    get Summ() {
      return this.price * this.amount;
    },
    get Kkal() {
      return this.kkal * this.amount;
    },
  },
];
const extraProdut = {
  doubleMayonnaise: {
    price: 5000,
    name: "Двойной майонез",
    kkal: 200,
  },
  lettuce: {
    price: 3000,
    name: "Салатный лист",
    kkal: 200,
  },
  cheese: {
    price: 4000,
    name: "Сыр",
    kkal: 200,
  },
};

const products = [...document.querySelectorAll(".main__product")],
  productBtn = [...document.querySelectorAll(".main__product-btn")],
  checkExtra = [...document.querySelectorAll(".main__product-checkbox")],
  btnModal = document.querySelector(".addCart"),
  checkParent = document.querySelector(".receipt"),
  checkOrder = document.querySelector(".receipt__window-out"),
  totalOrder = document.querySelector(".order"),
  orderClose = document.querySelector(".close");


  orderClose.addEventListener('click', function() {
    checkParent.classList.remove('active')
  })
  
btnModal.addEventListener("click", function () {
  checkParent.classList.toggle("active");
});

productBtn.forEach((btn) => {
  btn.addEventListener("click", plusMinus);
});

function plusMinus() {
  const array = [];
  let total = 0;
  const parent = this.closest(".main__product"),
    parentIndex = products.indexOf(parent),
    outAmount = parent.querySelector(".main__product-num"),
    outPrice = parent.querySelector(".main__product-price span"),
    outKkal = parent.querySelector(".main__product-call span"),
    btnSymbol = this.getAttribute("data-symbol");

  if (btnSymbol == "+") {
    productList[parentIndex].amount++;
  } else if (btnSymbol == "-" && productList[parentIndex].amount > 0) {
    productList[parentIndex].amount--;
  }
  const { amount, Kkal, Summ } = productList[parentIndex];
  outAmount.innerHTML = amount;
  outPrice.innerHTML = Summ.toLocaleString();
  outKkal.innerHTML = Kkal.toLocaleString();

  for (const key in productList) {
    if (productList[key].amount > 0) {
      total += productList[key].Summ;
      array.push(productList[key]);
    }
  }
  checkOrder.innerHTML = "";
  for (let i = 0; i < productList.length; i++) {
    checkOrder.innerHTML += card(productList[i]);
  }

  totalOrder.innerHTML = `Общая сумма к оплате - ${total}`;
}

function card(data) {
  return `
  <div> <sapn>${data.name}</span> x <sapn>${data.amount}</span> <sapn>${data.Summ}</span> </div>
  `;
}
checkExtra.forEach((checkbox) => {
  checkbox.addEventListener("input", check);
});

function check() {
  const parent = this.closest(".main__product"),
    parentIndex = products.indexOf(parent),
    outPrice = parent.querySelector(".main__product-price span");
  outKkal = parent.querySelector(".main__product-call span");
  attr = this.getAttribute("data-extra");

  if (this.checked) {
    productList[parentIndex].price += extraProdut[attr].price;
    productList[parentIndex].kkal += extraProdut[attr].kkal;
  } else {
    productList[parentIndex].price -= extraProdut[attr].kkal;
    productList[parentIndex].kkal -= extraProdut[attr].kkal;
  }

  const { Summ, Kkal } = productList[parentIndex];
  outPrice.innerHTML = Summ.toLocaleString();
  outKkal.innerHTML = Kkal.toLocaleString();
}
