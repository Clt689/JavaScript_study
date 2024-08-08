## Computed property 
```javascript
let a = 'age';

const user = {
  name : 'Mike',
  age : 30
}
```
```javascript
let a = 'age';

const user = {
  name : 'Mike',
  [a] : 30  // age : 30 ✅
}
```
이를 computed property(계산된 프로퍼티)라고 함.


## 객체 Methods
### 1. Object.assing() : 객체 복제
```javascript
const user = {
	name : 'Mike',
	age : 30
}

Object.assign({name : 'Tom'}, user);
console.log(user);
```
- 키가 같다면 덮어쓰게 된다.

### 2. Object.keys()
```javascript
const user = {
	name : 'Mike',
	age : 30,
	gender : 'male',
}

console.log(Object.keys(user));
```
- 배열로 만들어 반환

### 3. Object.values()
```js
const user = {
	name : 'Mike',
	age : 30,
	gender : 'male',
}

console.log(Object.values(user));
```
- 값들만 배열로 반환

### 4. Object.entries()
```js
const user = {
	name : 'Mike',
	age : 30,
	gender : 'male',
}

console.log(Object.entries(user));
```
- 키 & 값 쌍으로 이루어진 배열 반환
### 5. Object.fromEntries()
```js
const arr = [
	["name","Mike"],
	["age",30],
	["gender","male"]
];

console.log(Object.fromEntries(arr));
```
```
// [object Object] 
{
  "name": "Mike",
  "age": 30,
  "gender": "male"
}
```
<br>

## 실습
```js
// let n = "name";
// let a = "age";

// const user = {
// 	[n] : "Mike",
// 	[a] : 30,
// 	[1+4] : 5,
// }

// console.log(user);

// 객체를 만들어 주는 함수
function makeObj(key, val){ 
	return {
		[key] : val
	}
}

const obj = makeObj("이름", 33);
console.log(obj);
````