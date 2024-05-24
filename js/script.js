let activeBox;
let endMessage = document.querySelector(".thank-box");

window.addEventListener("DOMContentLoaded", () => {
  activeBox = 1;
  showBox();
});

// window.addEventListener("beforeunload", (e) => {
//   const message = "You will lose your entered data";
//   e.returnValue = message;
//   return message;
// });

function showBoxNum(num) {
  activeBox = parseInt(num);
  showBox();
}

let formBoxContainer = document.querySelectorAll(".form-box-container");

function showBox() {
  formBoxContainer.forEach((box, index) => {
    box.style.display = "none";
    endMessage.style.display = "none";

    if (index === activeBox - 1) {
      box.style.display = "block";
      endMessage.style.display = "none";
    }
  });

  numActive();
}

let activeNum = document.querySelectorAll(".num-box");

function numActive() {
  activeNum.forEach((num, index) => {
    num.classList.remove("active");

    if (index == activeBox - 1) {
      num.classList.add("active");
    }
  });
}

function end() {
  endMessage.style.display = "flex";

  formBoxContainer.forEach((box, index) => {
    box.style.display = "none";
  });
}

function showNextPage() {
  activeBox++;
  showBox();
}

function showPrevPage() {
  activeBox--;
  showBox();
}

let cards = document.querySelectorAll(".form-two-box .cards .card");

function addActive2(event) {
  cards.forEach((element) => {
    element.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

cards.forEach((card) => {
  card.addEventListener("click", addActive2);
});
