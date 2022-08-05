window.onload = function () {
  function onClick() {
    document.querySelector(".modal_wrap").style.display = "block";
    document.querySelector(".black_bg").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function offClick() {
    document.querySelector(".modal_wrap").style.display = "none";
    document.querySelector(".black_bg").style.display = "none";
    document.body.style.overflow = "auto";
    document.querySelector(".modal_alert").style.display = "none";
  }

  function takeOrder() {
    document.querySelector(".modal_alert").style.display = "block";
    document.querySelector(".black_bg").style.display = "block";
    document.querySelector(".modal_wrap").style.display = "none";
  }

  document.getElementById("modal_btn").addEventListener("click", onClick);
  document.querySelector(".modal_take").addEventListener("click", takeOrder);
  document.querySelector(".modal_refuse").addEventListener("click", offClick);
  document.querySelector(".modal_close").addEventListener("click", offClick);
  document.querySelector(".modal_close2").addEventListener("click", offClick);

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
