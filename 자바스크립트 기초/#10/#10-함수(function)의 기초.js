// function showError(){
//   alert("에러가 발생했습니다. 새로고침 해주세요. ");
// }

// showError();

function sayHello(name){
  let msg = `Hello`;
  if(name){
    msg = `Hello, ${name}`;
  }
  console.log(msg);
}

sayHello();

// 함수는 한 번에 한 작업에 집중
// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍