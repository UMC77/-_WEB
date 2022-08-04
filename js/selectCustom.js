const selectBoxElements = document.querySelectorAll(".select_box");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select_box");
  const selectedElement = selectBox.querySelector(".selected_val");
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach((selectBoxElement) => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option_item");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect =
    targetElement.classList.contains("select_box") ||
    targetElement.closest(".select_box");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelectorAll(".select_box");

  allSelectBoxElements.forEach((boxElement) => {
    boxElement.classList.remove("active");
  });
});
