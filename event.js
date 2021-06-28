/* change */
/* 어떤 값이 바뀔때 함수 호출 */
const changeInput = document.querySelector('input'),
    changeP = document.querySelector('.inputValue');

function handleInputChange(event) {
    changeP.innerText = event.target.value;
}

/* input 값이 바뀌면 해당 함수 호출 */
changeInput.addEventListener('change', handleInputChange); 

/**------------------------------------------------------------------- */

const changeSelect = document.querySelector('.fruit'),
    selectP = document.querySelector(".selectValue");

function handleSelectChange(event) {
    selectP.innerText = event.target.value;
}

/* select 값이 바뀌면 해당 함수 호출 */
changeSelect.addEventListener('change', handleSelectChange);

/**------------------------------------------------------------------- */
/**------------------------------------------------------------------- */

/* focus, blur, focusin, focusout */
/* 어떤 요소가 포커스를 받을때 함수 호출 */
const inputId = document.querySelector("#id"),
    inputPwd = document.querySelector("#pwd");

function handleFocusInput(event) {
    event.target.style.background = 'red';
}

function handleblurInput(event) {
    event.target.style.background = '';
}

inputId.addEventListener('focus', handleFocusInput); // focus
inputId.addEventListener('blur', handleblurInput); // blur

inputPwd.addEventListener('focusin', handleFocusInput); // focusin
inputPwd.addEventListener('focusout', handleblurInput); // focusout

/**------------------------------------------------------------------- */
/**------------------------------------------------------------------- */

/* click */
/* 어떤 요소를 클릭했을때 함수 호출 */
const liTag = document.querySelectorAll('li'),
    clickLiValue = document.querySelector('.clickLiValue');

function handleClickLi(event) {
    clickLiValue.innerText = event.target.innerText;
}

for(let i = 0; i < liTag.length; i++) {
    liTag[i].addEventListener('click', handleClickLi); // click했을때
}

/**------------------------------------------------------------------- */
/**------------------------------------------------------------------- */

/* keydown, keyup */
/* keydown : 키보드를 눌렀을때 이벤트 발생 */
/* keyup : 키보드를 눌렀다가 뗄때 이벤트 발생 */
const inputKeydown = document.querySelector('#keydown'),
    inputKeyUp = document.querySelector('#keyup');

function handleKeydownInput(event) {
    alert("keydownn이 되었습니다.");
}

function handleKeyupInput(event) {
    alert("keyup이 되었습니다");
}

inputKeydown.addEventListener('keydown', handleKeydownInput); // 키보드 키를 눌렀을때
inputKeyUp.addEventListener('keyup', handleKeyupInput); // 키보드 키를 뗐을때


/**------------------------------------------------------------------- */
/**------------------------------------------------------------------- */

/**
 * mousedown : 마우스를 눌렀을때
 * mouseup : 마우스를 땠을때
 * click : 마우스를 누르고 뗐을때
 */
const box2 = document.querySelector('.box2'),
    result = document.querySelector('.result'),
    clearBtn = document.querySelector('.clear');

function handleMousedownBox() {
    result.innerHTML += '<div>mousedown</div>';
}

function handleMouseupBox() {
    result.innerHTML += '<div>mouseup</div>';
}

function handleClickBox() {
    result.innerHTML += '<div>click</div>';
}

function handleClickBtn() {
    result.innerHTML = '';
}

box2.addEventListener('mousedown', handleMousedownBox); // 마우스를 눌렀을때
box2.addEventListener('mouseup', handleMouseupBox); // 마우스를 뗐을때
box2.addEventListener('click', handleClickBox); // 마우스를 눌르고 뗏을때(클릭)
clearBtn.addEventListener('click', handleClickBtn);


/**
 * mouseover : 마우스가 요소 위에 올려졌을때
 * mouseout : 마우스가 요소 밖으로 나갔을때
 */
const box3 = document.querySelector('.box3'),
    result2 = document.querySelector('.result2'),
    clear2 = document.querySelector('.clear2');

function handleMouseoverBox() {
    result2.innerHTML += '<div>mouseover</div>';
}

function handleMouseoutBox() {
    result2.innerHTML += '<div>mouseout</div>';
}

function handleClickClear2() {
    result2.innerHTML = '';
}

box3.addEventListener('mouseover', handleMouseoverBox); // 마우스가 요소 위에 올려졌을때
box3.addEventListener('mouseout', handleMouseoutBox); // 마우스가 요소 밖으로 나갔을때
clear2.addEventListener('click', handleClickClear2);

/**
 * mouseover : 마우스가 움직였을때
 */
 const box4 = document.querySelector('.box4'),
 result3 = document.querySelector('.result3'),
 clear3 = document.querySelector('.clear3');

function handleMousemoveBox() {
 result3.innerHTML += '<div>mousemove</div>';
}

function handleClickClear3() {
 result3.innerHTML = '';
}

box4.addEventListener('mousemove', handleMousemoveBox); // 마우스가 움직였을때
clear3.addEventListener('click', handleClickClear3);