## toString()
10진수 -> 2진수/16진수

```js
let num = 10;

num.toString();     // 10
num.toString(2);    // 1010

let num2 = 255;
num2.toString(16);  // FF
```

<br>

# Math
### 1. Math.PI;
- 원주율 : 3.141592

### 2. Math.ceil(), Math.floor()
- Math.ceil() : 올림
- Math.floor() : 내림

### 3. 소수점 자릿수 : toFixed()

```js
let userRate = 30.1234;

userRate.toFixed(2);  // "30.12"
userRate.toFixed(0);  // "30"
userRate.toFixed(6);  // "30.123400"
```
- 통계나 지표 작업에 많이 쓰임.

✅ 문자열을 반환하기 때문에 **주의**

### 4. isNaN()
```js
let x = Number('x');  // NaN

x == NaN     // false
x === NaN    // false
NaN === NaN  // false

isNaN(x)  // true
isNaN(3)  // false
```
- isNaN()만이 NaN인지 아닌지 판단 가능

### 5. parseInt()
```js
let margin = '10px';

parseInt(margin);  // 10
Number(margin);    // NaN

let redColor = 'f3';
parseInt(redColor); // NaN
```
- Number()와 다른 점 : 문자가 혼용되어 있어도 동작함
- parseInt()는 읽을 수 있는 부분까지는 읽고, 문자를 만나면 숫자를 반환
- 숫자로 시작하지 않으면 NaN을 반환

```js
let redColor = 'f3';
parseInt(redColor);  // NaN

let redColor = 'f3';
parseInt(redColor, 16);  // 243

parseInt('11', 2)   // 3
```
- 두 번째 인수로 16을 전달하여 16진수로 변환
- 문자열 '11'을 숫자로 바꾸고, 2진수로 10진수로 변환 가능

### 6. parseFloat()
```js
let padding = '18.5%';
parseInt(padding);    // 18
parseFloat(padding);  // 18.5
```

### 7. Math.random()
- 0 ~ 1 사이 무작위 숫자 생성

Q. 1 ~ 100 사이 임의의 숫자 뽑고 싶다면?
```js
// Answer
Math.floor(Math.random() * 100) + 1
```

### 8. Math.max(), Math.min()
- 최대, 최소를 구할 때 사용

### 9. Math.abs() : 절댓값
- Math.abs(-1) : 1

### 10. Math.pow(n, m) : 제곱
### 11. Math.sqrt() : 제곱근