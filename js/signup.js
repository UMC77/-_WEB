// 1 . 각 필요한 요소를 불러와 변수에 할당
let ownNum = document.querySelector('#ownNum') //사업자등록번호
let userId = document.querySelector('#userId') //아이디
let failMsg = document.querySelector('.failure-message')
let sucMsg = document.querySelector('.success-message')
let misMsg = document.querySelector('.mismatch-message')
let pwMsg = document.querySelector('.pw-success-message')
let NpwMsg = document.querySelector('.pw-failure-message')
const userPw =  document.querySelector('#userPw'); //비밀번호
const pwTest = document.querySelector('#pwTest'); //비밀번호 확인
let ownName =  document.querySelector('#name'); //이름
const phoneNum = document.querySelector('#phoneNum'); //휴대폰번호
const Nextbtn=document.querySelector('#btn_next')
let chaMsg= document.querySelector('.cha-message')
let phoneMsg =document.querySelector('.phoneNum-message')

//2-1 비밀번호 8자 이상
function pw8Length(value) {
  return value.length >= 8
}


// 3. 함수의 매개변수로 들어오는 값이 4글자 이상인경우 true
function id4Length(value) {
  return value.length >= 4
}

// 2. 아이디 입력창에 키를 눌렀을때 조건문
userId.onkeyup=function(){
  if(id4Length(userId.value)){//
    sucMsg.classList.remove('hide') // sucMsg 클래스 hide 제거
   failMsg.classList.add('hide')// failMsg 클래스 hide 추가
  }else{
    sucMsg.classList.add('hide')// sucMsg 클래스 hide 추가
    failMsg.classList.remove('hide')// failMsg 클래스 hide 제거
  }
}

// 4.  비밀번호1 , 비밀번호2 값을 받아 같으면 true
function isMatch (password1, password2) {
  return password1 === password2;
}

//5. 비밀번호확인창에 키를 눌렀을때 
pwTest.onkeyup = function () {
  if(isMatch(userPw.value,pwTest.value)){ // 함수조건 만족시
    misMsg.classList.add('hide')  // 메세지 안보임
  } else {
    misMsg.classList.remove('hide') // misMag 내용출력
  }
}

//6. 비밀번호창에 키를 눌렀을때 
userPw.onkeyup=function(){
  if(pw8Length(userPw.value)){//비밀번호가 8자 이상이어야 함
    pwMsg.classList.remove('hide') // sucMsg 클래스 hide 제거
    NpwMsg.classList.add('hide')// failMsg 클래스 hide 추가
  }else{
  pwMsg.classList.add('hide')// sucMsg 클래스 hide 추가
  NpwMsg.classList.remove('hide')// failMsg 클래스 hide 제거
  }
}

//아이디에 특수문자 포함 x
userId.onkeyup = function () {
  var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

	if(special_pattern.test(userId.value) == true) {
    chaMsg.classList.remove('hide')
  
		return true;
	} else {
    chaMsg.classList.add('hide')
		return false;
	}
}


//버튼 이동
function check() {
  let name =  document.querySelector('#name'); //이름
  let ownNum = document.querySelector('#ownNum') //사업자등록번호
  let userId = document.querySelector('#userId') //아이디

  var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if(name.value==""||ownNum==""||isMatch(userPw.value,pwTest.value)==false||pw8Length(userPw.value)==false){
    alert("필수란을 채워주세요.")
  }else if(id4Length(userId.value)==false) {
    alert("아이디는 4자 이상 이어야 합니다.")
  }
  else if(special_pattern.test(userId.value)) {
    alert("아이디에 특수문자는 포함되지 않습니다.")
  }
  else{
    //첫번째 회원가입 화면 api
    fetch('http://nibbangnaebbang.shop/ceo/signupceo', {
      method: 'post',
      body: JSON.stringify({
        store_num: ownNum,
        ceo_id: userId,
        ceo_pwd: userPw,
        ceo_phone: phoneNum,
        ceo_name: ownName,
      })
    }) 
    .then( res => res.json())
    .then( res => {
      if (res.success) {
        alert("저장완료");
        window.location.href = 'http://127.0.0.1:5502/signup2.html'
      }
      elseP
      alert("실패");
    })
  }
}

// 서버 연결되면 아이디 중복 체크

//회원가입 승인
function signup(){
  let storeName =  document.querySelector('#storeName'); //상호
  let storeNum = document.querySelector('#storeNum') //매장 전화번호
  let address = document.querySelector('#sample6_address') //주소
  let detailAddress = document.querySelector('#detailAddress') //주소
  // 서버형성되면 주소 추가||address.value==""||detailAddress==""

  const aBtn= document.querySelector('#니빵내빵ServiceAgree')
  const bBtn= document.querySelector('#사이트Agree')
  const cBtn= document.querySelector('#개인정보Agree')

  if(storeName.value==""||storeNum.value==""|aBtn.checked==false||bBtn.checked==false||cBtn.checked==false){
    alert("필수란을 채워주세요.")
  }
  else{
        window.location.href = 'http://127.0.0.1:5502/handleReserve.html'
  }
}

//전체 버튼
function selectAll(selectAll)  {
  const checkboxes 
     = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}
