// 금칙어 : 콜라
// includes 사용

// function hasColar(str){
//     if (str.indexOf('콜라') > -1){
//         console.log("금칙어가 있습니다.");
//     } else {
//         console.log("통과");
//     }
// }

function hasColar(str){
    if (str.includes('콜라')){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasColar("와 사이다가 짱이야!");  // if (-1) => true로 출력
hasColar("무슨 소리, 콜라가 최고");  
hasColar("콜라");  // 0이라서 false로 출력