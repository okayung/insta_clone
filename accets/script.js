function updateInputState(input, activeVar) {
  // trim() 공백
  if(input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true ;
    } else {input.parentElement.classList.remove('active');
    activeVar = false;
    }
    return activeVar;
  }

  let userId = document.getElementById('userid');
  // let userIdInput = userId.querySelector('input');

  let userPw = document.getElementById('userpw');
  // let userPwInput = userPw.querySelector('input');

  let idActive = false;
  let pwActive = false;
// let idActive = pwActive = false; =>사용가능
let submitBtn = document.getElementById('submit-btn');
console.log(submitBtn)

  function handleInput(e) {
    // e.target => 이벤드가 일어나는 대상
    let input = e.target;
    let type = input.getAttribute("type");

    if(type == "text") {
      idActive = updateInputState(input, idActive);
    } else {
      pwActive = updateInputState(input, pwActive);
    }
    if(idActive && pwActive) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.removeAttribute('disabled', true);
    }

    }
    
  
  userId.addEventListener('keyup', handleInput);
  userPw.addEventListener('keyup', handleInput);

