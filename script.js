let deadline = document.querySelector(".deadline");
let interval;
function startTimer() {
  hours = 5;
  seconds = 1;
  minutes = 0;
  milliseconds = 0;
  interval = setInterval(() => {
    milliseconds--;
    if (milliseconds <= 0) {
      milliseconds = 30;
      seconds--;
    } else if (seconds <= 0) {
      seconds = 59;
      minutes--;
    } else if (minutes <= 0) {
      minutes = 59;
      hours--;
    }
    deadline.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, 33);
}
startTimer();

let main = document.querySelector("main");
let mainBottom = document.createElement("div");
let discount = document.createElement("div");
let laptop = document.createElement("img");
let like = document.createElement("img");
let stat = document.createElement("img");
let laptopInfo = document.createElement("p");
let oldPrice = document.createElement("p");
let newPrice = document.createElement("p");
let installmenPlan = document.createElement("div");
let cart = document.createElement("div");
let btns = document.createElement("div");
let cartImg = document.createElement("img");
let installmenPlanbtn = document.createElement("div");
let prices = document.createElement("div");

mainBottom.classList.add("mainBottom");
discount.classList.add("discount");
discount.classList.add("bottomDiscount");
laptop.classList.add("laptop");
like.classList.add("like");
stat.classList.add("stat");
laptopInfo.classList.add("laptopInfo");
prices.classList.add("pricesBottom");
oldPrice.classList.add("oldPrice");
newPrice.classList.add("newPrice");
installmenPlan.classList.add("installmenPlan2");
cart.classList.add("cart");
cartImg.classList.add("cartImg");
installmenPlanbtn.classList.add("installmenPlanbtn");
btns.classList.add("btns");

discount.innerHTML = "-26%";
laptop.src = "img/laptop.png";
like.src = "img/211754_heart_icon.png";
stat.src = "img/2203540_bar_chart_stat_statistic_icon.png";
laptopInfo.innerHTML = 'Ноутбук Lenovo V15-IGL N4020 4/256 GB SSD 15,6"HD';
oldPrice.innerHTML = "3 468 000 сум";
newPrice.innerHTML = "2 566 320 сум";
installmenPlan.innerHTML = "332 000 сум x 12 мес";
cartImg.src = "img/2849824_store_shopping_market_buy_shop_icon.png";
installmenPlanbtn.innerHTML = "В рассрочку";

main.append(mainBottom);
mainBottom.prepend(
  discount,
  laptop,
  like,
  stat,
  laptopInfo,
  prices,
  installmenPlan,
  btns
);
prices.prepend(oldPrice, newPrice);
cart.prepend(cartImg);
btns.prepend(cart, installmenPlanbtn);
