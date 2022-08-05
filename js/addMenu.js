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

function deleteMenu() {
  const delete_menu = document.getElementById("menu_list");
  delete_menu.remove();
}

window.onload = function () {
  function addMenu() {
    const addArea = document.getElementById("addCate");
    //메뉴 리스트 div
    let new_list = document.createElement("div");
    new_list.className = "menu_list";
    addArea.appendChild(new_list);
    //메뉴 사진 div
    let new_pic = document.createElement("div");
    new_pic.className = "menu_pic";
    addArea.appendChild(new_pic);
    //메뉴 사진 이미지
    let new_pic_img = document.createElement("img");
    new_pic.appendChild(new_pic_img);
    //메뉴 이름 div
    let new_name = document.createElement("div");
    new_name.className = "menu_name";
    addArea.appendChild(new_name);
    let new_span1 = document.createElement("span");
    let new_span2 = document.createElement("span");
    new_name.innerText("베이글");
    new_name.innerText("3,800원");
    new_name.appendChild(new_span1);
    new_name.appendChild(new_span2);
    //메뉴 셀렉트
    let div_select = document.createElement("div");
    div_select.className = "menu_select";

    addArea.appendChild(div_select);
    let new_select = document.createElement("select");
    new_select.className = "menu_select";
    div_select.new_select;

    new_select.appendChild(new_select);

    const options = ["판매여부", "판매중", "품절", "메뉴 숨김"];
    for (const [index, a] of options.entries()) {
      const opt = document.createElement("option");
      opt.value = index;
      opt.innerHTML = a;
      new_select.appendChild(opt);
    }
    //메뉴 삭제
    let new_del = document.createElement("div");
    new_del.className = "menu_delete";
    addArea.appendChild(new_del);
    let new_btn = document.createElement("button");
    new_btn.className("menu_delete_btn");
    new_del.appendChild(new_btn);
  }
  document.getElementById("saveBtn").addEventListener("click", addMenu);
};

var sellBtn = document.querySelector("#onsell");

function handleSellBtn() {
  sellBtn.classList.toggle("mainColor");
}

var notSellBtn = document.querySelector("#offsell");

function handleNotSellBtn() {
  notSellBtn.classList.toggle("mainColor");
}

var hideSellBtn = document.querySelector("#hidesell");

function handleHideSellBtn() {
  hideSellBtn.classList.toggle("mainColor");
}
