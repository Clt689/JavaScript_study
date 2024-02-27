// 논리 연산자 : ||(OR), &&(AND), !(NOT)
// OR은 첫번째 True를 발견하는 즉시 평가를 멈춤.
// AND는 첫번째 False를 발견하는 즉시 평가를 멈춤.

// const age = prompt("나이를 입력하세요.");
// const isAge = age > 19;

// if (!isAge){
//   alert("불합격");
// }

// 우선순위(AND가 OR보다 높다.)
const gender = 'M';
const name = 'Jane';
const isAdult = true;

// if(gender === 'M' && name === 'Mike' || isAdult){
if(gender === 'M' && (name === 'Mike' || isAdult)){
  console.log('통과');
}
else{
  console.log('실패');
}