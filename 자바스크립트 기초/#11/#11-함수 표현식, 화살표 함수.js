// 함수 작성

// function showError(){
//   alert('에러가 발생했습니다. 새로고침 해주세요. ');
// }

// showError();

// 매개변수가 있는 함수
// OR 연산자 사용
// default value
// function sayHello(name = 'friend'){
//   // let msg = `Hello`;   // msg가 달라질 수 있기 때문에 const가 아닌, let으로 선언
//   // let newName = name || 'friend';
  
//   let msg = `Hello, ${name}`;
//   console.log(msg);
// }

// sayHello();
// sayHello("Jane");


// 전역 변수와 지역 변수
// let msg = "welcome";      // 전역 변수
// console.log(msg);

// function sayHello(name){
//   let msg = "Hello";      // 지역 변수
//   console.log(msg + ' ' + name);
// }

// sayHello('Mike');
// console.log(msg);



// return으로 값 반환
// alert를 실행 후 함수를 강제 종료하는 목적으로 사용하기도 함.
// 함수는 한 번에 한 작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
// ex) showError(에러를 보여줌), getName(이름을 얻어옴), createUserData(유저데이터 생성), checkLogin(로그인 여부 체크)

function add(num1, num2){
  return num1 + num2;
}

const result = add(2,3);
console.log(result);