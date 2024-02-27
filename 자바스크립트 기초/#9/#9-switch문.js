// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 400원
// 수박 : 500원
// 사고 싶은 과일을 물어보고 가격 알려주기

let fruit = prompt("무슨 과일을 사시겠습니까?")

switch(fruit){
  case "사과":
    alert(`${fruit}는 100원입니다.`);
  case "바나나":
    alert(`${fruit}는 200원입니다.`);
  case "키위":
    alert(`${fruit}는 300원입니다.`);
  case "멜론":
    alert(`${fruit}은 400원입니다.`);
  case "수박":
    alert(`${fruit}은 500원입니다.`);
  default :
    alert('해당 과일은 판매하지 않습니다.');
}