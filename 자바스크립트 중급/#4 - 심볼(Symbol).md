## 심볼(Symbol)
```js
const obj = {
	1: '1입니다.',
	false : '거짓'
}

console.log(Object.keys(obj));   // ["1","false"]

console.log(obj['1']);      // "1입니다."
console.log(obj['false']);  // "거짓"
```
- 이와 같이 객체의 프로퍼티 키는 문자형으로 가능하고, 하나 더 가능한 것이 있는데 바로 **Symbol형**

<br>

### Symbol
> Symbol은 **유일한 식별자를 만들 때 사용**한다.
```js
const a = Symbol();
const b = Symbol();

console.log(a);
console.log(b);
```
- ```a === b```, ```a == b``` 모두 **false** 

➡️ Symbol : **유일성 보장** 

<br>

### Symbol을 객체의 키로 사용
```js
const id = Symbol('id');
const user = {
	name : 'Mike',
	age : 30,
	[id] : 'myid'
}

console.log(user);
```
- Object.keys(user)
- Object.values(user)
- Object.entries(user)
- for...in 문

: 키가 Symbol형인 프로퍼티는 건너뜀.

<br>

### Symbol.for() : 전역 심볼
- **하나**의 심볼만 보장받을 수 있음
  - 없으면 만들고, 있으면 가져오기 때문
- Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol **공유**

<br>

### 숨겨진 Symbol key 보는 법
1. Object.getOwnProperySymbols(user)
2. Reflect.ownKeys(user)

<br>

## 실습
```js
// 다른 개발자가 만들어 놓은 객체
const user = {
	name : 'Mike',
	age : 30,
}

// 내가 작업
// user.showName = function(){};
const showName = Symbol('show name');
user[showName] = function(){
	console.log(this.name);
}

user[showName]();

// 사용자가 접속하면 보는 메세지
for(let key in user){
	console.log(`His ${key} is ${user[key]}.`);
}
```