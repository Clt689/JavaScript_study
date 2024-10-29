let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
]

let newList = [];

// for(let i=0; i < list.length; i++){
//     for(let j=0; j < list[i].length; j++){
//         if ( Number(list[i]) >= 0 && Number(list[i]) <= 9){
//             continue;
//         }
//         else{
//             newList.push(list[i]);
//         }
//     }
// }

for(let i=0; i < list.length; i++){
    newList.push(
        list[i].slice(4)
    );
}
console.log(newList);