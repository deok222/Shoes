const bars = document.querySelector(".bars");
const nav = document.querySelector(".nav");
const closeBtn = bars.querySelector("i");

const menuItems = document.querySelectorAll(".nav li");
console.log(menuItems);

bars.addEventListener("click", () => {
  nav.classList.toggle("on");
  bars.classList.toggle("on");
  closeBtn.classList.toggle("uil-multiply");
});

// foreach -> 복수의 여러가지 속성값을 컨트롤 할 때
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.toggle("on");
    bars.classList.toggle("on");
    closeBtn.classList.toggle("uil-multiply");
  });
});
