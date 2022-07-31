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

function addCategory() {
  let addArea = document.getElementById("addCate");
  const options = [
    "빵종류",
    "비건빵",
    "케이크",
    "샌드위치",
    "크루아상",
    "통밀빵",
    "도넛류",
    "파이",
    "와플",
    "베이글",
    "페스츄리",
    "쿠키",
    "마카롱",
    "소금빵",
    "스콘",
    "고로케",
  ];
  let new_div = document.createElement("div");
  let new_select = document.createElement("select");

  new_div.className = "select_header";
  new_select.className = "select";

  for (const [index, a] of options.entries()) {
    const opt = document.createElement("option");
    opt.value = index;
    opt.innerHTML = a;
    new_select.appendChild(opt);
  }
  addArea.appendChild(new_div);
  new_div.appendChild(new_select);

  let new_a = document.createElement("a");
  let new_span_plus = document.createElement("span");
  let new_span_menu = document.createElement("span");

  new_a.href = "http://127.0.0.1:5502/addMenu.html";
  new_a.className = "plus_menu";
  new_span_plus.innerText = "+ ";
  new_span_menu.innerText = "메뉴 추가";

  addArea.appendChild(new_a);
  new_a.appendChild(new_span_plus);
  new_a.appendChild(new_span_menu);
}
