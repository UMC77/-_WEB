// 사진 등록 input value
$("#file").on("change", function () {
  var fileName = $("#file").val();
  $(".q1-box").val(fileName);
});

$("textarea.autosize").on("keydown keyup", function () {
  $(this).height(1).height($(this).prop("scrollHeight"));
});
