let count = 0;
document.querySelector(".zikr.one").classList.add("show");

function increment() {
  if (count >= 33 && count < 66) {
    document.querySelector(".zikr.one").classList.remove("show");
    document.querySelector(".zikr.two").classList.add("show");
    count = count + 1;
  } else if (count >= 66 && count < 99) {
    document.querySelector(".zikr.one").classList.remove("show");
    document.querySelector(".zikr.two").classList.remove("show");
    document.querySelector(".zikr.three").classList.add("show");
    count = count + 1;
  } else if (count >= 99) {
    document.querySelector(".max").classList.add("show");
  } else {
    count = count + 1;
  }
  document.querySelector(".counter").innerText = count;
}

function reset() {
  count = 0;
  document.querySelector(".counter").innerText = count;
  document.querySelector(".max").classList.remove("show");
  document.querySelector(".zikr.one").classList.add("show");
  document.querySelector(".zikr.two").classList.remove("show");
  document.querySelector(".zikr.three").classList.remove("show");
}

function mode() {
  document.querySelector("body").classList.toggle("darkMode");
  document.querySelector(".wrapper").classList.toggle("darkMode");
  document.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("darkMode");
  });
  document.querySelectorAll(".icon").forEach((icon) => {
    icon.classList.toggle("show");
  });
  document.querySelectorAll(".bx").forEach((bx) => {
    bx.classList.toggle("show");
  });
}
