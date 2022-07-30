$("#file_input").on("change", function () {
  var fileName = $("#file_input").val();
  $(".upload-name").val(fileName);
});

function addIngrement() {
  let addArea = document.getElementById("add_ingre");
  let new_ingre_tr = document.createElement("tr");
  let new_ingre_td = document.createElement("td");
  addArea.appendChild(new_ingre_tr);
  new_ingre_tr.appendChild(new_ingre_td);
  let new_ingre_input = document.createElement("input");
  new_ingre_input.placeholder = "재료명을 정확히 입력해주세요";
  new_ingre_td.appendChild(new_ingre_input);
}
