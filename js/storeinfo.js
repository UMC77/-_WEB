// 사진 등록 input value
$("#file").on("change", function () {
  var fileName = $("#file").val();
  $(".q1-box").val(fileName);
});

//textarea 크기 조절
$("textarea.autosize").on("keydown keyup", function () {
  $(this).height(1).height($(this).prop("scrollHeight"));
});

//가게 정보 변수
let storeName = document.querySelector(".storeName"); //가게 이름
let StoreImg = document.querySelector("#file"); //가게 대표 이미지
let ownNum = document.querySelector("#ownNum"); //사업자 번호
let storeAddress = document.querySelector("#storeAddress"); //가게 주소
let storeNum = document.querySelector("#storeNum"); //가게 전화번호

let storeIntro = document.querySelector("#store_intro"); //가게 소개

fetch("#")
  .then((response) => response.json())
  .then((data) => console.log(data));

function checked(event) {
  console.log(event.target);
}
