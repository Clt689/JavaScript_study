// 1부터 10까지 로그 찍기.

// for(var i=1; i<11; i++){
//   console.log(i);
// }

// 반복문 loop = 동일한 작업을 여러번 반복

// let i = 0;
// while(i<10){   = i가 10보다 작으면, 계속 반복하라
//  console.log(i);
//  i++;
// }

// do.. while 문 = 적어도 한 번은 실행하고 while문을 반복한다는 점에서, while문과 차이점

// break : 즉시 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

// while(true){   // 무한 반복이기 때문에 조심해서 사용하기
//   let answer = confirm("계속 할까요?");
//   if(!answer){     // 취소버튼을 누르면 null값
//     break;
//   }
// }

for(let i = 0; i < 10; i++){
  if(i % 2){
    continue;
  }
  console.log(i);
}