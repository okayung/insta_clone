function updateInputState(input, activeVar) {
  // trim() 공백
  //공백제가한 value 값의 길이가 0보다 클때
  //=>사용자가 input 창에 입력한 값이 하나라도 있냐? 확인
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true ;
    } else {input.parentElement.classList.remove('active');
    activeVar = false;
    }
    // return : 해당함수가 실행된 후, 함수 호출한 위치로 전달
    return activeVar; //true, fales
  }

  let userId = document.getElementById('userid');
  // let userIdInput = userId.querySelector('input');

  let userPw = document.getElementById('userpw');
  // let userPwInput = userPw.querySelector('input');

  let idActive = false;
  let pwActive = false;
// let idActive = pwActive = false; =>사용가능
let submitBtn = document.getElementById('submit-btn');


  function handleInput(e) {
  
    // e.target => 이벤드가 일어나는 대상
    let input = e.target;
    let type = input.getAttribute("type");
    //return 값호출
    if(type == "text") { //타입이 텍스트일경우
      idActive = updateInputState(input, idActive); //return 값=>true,fales
    } else { //텍스트가 아닐경우=>password
      pwActive = updateInputState(input, pwActive); //return 값=>true,fales
    } //idActive 랑 pwActive 가 모두 참일때 => input.value.length > 0
    if(idActive && pwActive) { //둘다 true 일경우
      submitBtn.removeAttribute('disabled');
    } else {//idActive 랑 pwActive 둘 중 하나라도 false 일때
      submitBtn.setAttribute('disabled', true);
    }
  }
  
  userId.addEventListener('keyup', handleInput);
  userPw.addEventListener('keyup', handleInput);

// let appTxt = document.querySelector('.app-txt');
// console.log(appTxt)
//   function btnClick (e) {
//     console.log(e.target)
//   }
//    appTxt.addEventListener('click', btnClick)

// let pwInput = userPw.value
let pwVisible = document.getElementById('pw-visible');
// console.log(pwVisible)

function pwMode( ) {
   //userpw의 type이 password 일 경우
 if(userPw.getAttribute('type') == 'password') {
    // 1. 비밀번호 표시 클릭시 => userpw(inpput) type => text 로 변경
    userPw.setAttribute('type','text');
    // 2. pwVisible.innerHTML => '숨기기'로 변경
    pwVisible.innerHTML = '숨기기';
    //userpw의 type이 text일 경우
    // 1. 비밀번호 표시 클릭시 => userpw(inpput) type => password 로 변경
 } else {userPw.setAttribute('type','password');
    // 2. pwVisible.innerHTML => '비밀변호 변경'로 변경
    pwVisible.innerHTML = '비밀번호 표시';
 }
}
pwVisible.addEventListener('click',pwMode);

//Dark mode/Light mode
let modeBtn = document.getElementById('mode-toggle');
function modeToggle(e) {
  e.preventDefault(); //a 값 때문에 이동하려는 행동 저지
// 1. body 태그에 dark 라는 class toggle
// dark 라는 class가 있으면 remove, 없으면 add
let body = document.querySelector('body');
  body.classList.toggle('dark')
// 1. body 태그에 dark 라는 class 가 있을때
// 2. modeBtn.innerHTML ="Lightmode"
// 3. classList.contains()
 if(body.classList.contains('dark')) { 
     modeBtn.innerHTML = 'Lightmode';
   } else {
 // 1. body 태그에 dark 라는 class 가 없을때
 // 2.modeBtn.innerHTML ="Darkmode"
    modeBtn.innerHTML = 'Darkmode';}
 }

// 삼항연산자
// 조건 ? 참일때 : 거짓일때 
// modeBtn.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';


modeBtn.addEventListener('click',modeToggle);
