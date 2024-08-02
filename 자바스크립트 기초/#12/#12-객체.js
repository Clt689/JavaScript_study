// 객체
// const superman = {
//   name : 'clark',
//   age : 30,
// }

// // superman.hairColor = 'black';
// // superman['hobby'] = 'football';
// delete superman.age;
// console.log(superman);


// 객체
// function makeObject(name, age){
//   return {
//     name,
//     age,
//     hobby : 'football'
//   }
// }

// const Mike = makeObject('Mike', 30);
// console.log(Mike);

// console.log('age' in Mike);
// console.log('birthday' in Mike);



// 객체 in
// function isAdult(user){
//   if ( !('age' in user) ||    // user에 age가 없거나
//       user.age < 20 ){        // 20살 미만이거나
//     return false;
//   }
//   return true;
// }

// const Mike = {
//   name : 'Mike',
//   age : 30
// }

// const Jane = {
//   name : 'Jane'
// }

// console.log(isAdult(Mike));
// console.log(isAdult(Jane));


// 객체 for ... in

const Mike = {
  name : 'Mike',
  age : 30
}

for( x in Mike ){
  console.log(Mike[x]);
}