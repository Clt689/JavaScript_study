## '(작은 따옴표), "(큰 따옴표) , `(백틱)
```js
let html = '<div class="box_title">제목 영역</div>';
// 큰 따옴표가 안에 있어, 작은 따옴표가 편리

let desc = "It's 3 o'clock";
// 영어로 된 문장은 큰 따옴표가 편리

let name = 'Mike';
let result = `My name is ${name}.`; // My name is Mike.
let add = `2 + 3은 ${2+3}입니다.`; // 2 + 3은 5입니다.
```

### 백틱(`)의 다른 유용한 기능
- 백틱은 여러줄을 포함할 수 있다.
```js
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;

let desc = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다. 내일은 비소식이 있습니다.'

let desc = '오늘은 맑고 화창한
날씨가 계속 되겠습니다. 
내일은 비소식이 있습니다.';      // error 발생!
```

### 특정 위치에 접근
```js
let desc = "안녕하세요.";

desc[2];  // '하'
desc[4] = '용';
console.log(desc);  // 안녕하세요.
``` 
- 배열과 다르게 한 글자만 바꾸는 건 허용되지 않음.

### toUpperCase(), toLowerCase()
1. ```toUpperCase()``` : 모든 영문을 대문자로
2. ```toLowerCase()``` : 모든 영문을 소문자로

### str.indexOf(text)
- 문자열을 인수로 받아 몇 번째에 위치하는지 알려줌.
- 0부터 시작되는 것 주의
- 포함된 문자가 여러 개여도, 첫 번째 위치를 반환
```js
let desc = "Hi guys. Nice to meet you.";

desc.indexOf('to');  // 14
desc.indecOf('man');  // 찾는 것이 없으면 -1 반환

// ❌ - if문에서 0은 false
if (desc.indexOf('Hi')) {
    console.log('Hi가 포함된 문장입니다.');
}

// ✅
if (desc.indexOf('Hi') > -1) {
    console.log('Hi가 포함된 문장입니다.');
}
```

### str.substring(n, m)
- slice()와 유사하지만 n, m을 바꿔도 동작.
```js
let desc = "abcdefg";

desc.substring(2, 5);  // "cde"
desc.substring(5, 2);  // "cde"
```

### str.substr(n, m)
- n부터 시작, m개를 가져옴

### str.trim() : 앞 뒤 공백 제거
```js
let desc = " coding    ";
desc.trim();  // "coding"
```

### str.repeat(n) : n번 반복
