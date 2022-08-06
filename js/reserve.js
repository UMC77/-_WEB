window.onload = function () {
  function onHover() {
    document.querySelector(".tooltip_question").style.display = "block";
  }

  function outHover() {
    document.querySelector(".tooltip_question").style.display = "none";
  }

  document
    .querySelector(".fa-circle-question")
    .addEventListener("mouseover", onHover);
  document
    .querySelector(".fa-circle-question")
    .addEventListener("mouseout", outHover);
};

/*예약 버튼*/

var todayBtn = document.querySelector("#today_btn");

function handleTodayBtn() {
  todayBtn.classList.toggle("btn_color");
}

var earlyBtn = document.querySelector("#early_btn");

function handleEarlyBtn() {
  earlyBtn.classList.toggle("btn_color");
}

var storeBtn = document.querySelector("#store_btn");

function handleStoreBtn() {
  storeBtn.classList.toggle("btn_color");
}
