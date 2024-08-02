// 화살표 함수의 this는 전역객체를 가리킴
// = 브라우저 환경 : window
// = Node.js : global

// method

// let boy = {
//   name : 'Mike',
//   showName : function(){
//     console.log(this.name);
//   }
// };

// let man = boy;
// boy = null;

// man.showName();

let boy = {
  name : 'Mike',
  sayThis : () => {
    console.log(this);
  }
};

boy.sayThis();