// String() -> 문자형으로 변환
// Number() -> 숫자형으로 변환
// Boolean() -> 불린형으로 변환

// 형변환은 왜 필요한가?
// ex) "100" + 200 = ???

// prompt 입력받은 값 => "문자형"
// 80 + 90 != 170, = 8090
// const mathScore = prompt("수학 점수를 입력하세요.");
// const engScore = prompt("영어 점수를 입력하세요.");
// const result = Number(mathScore) + Number(engScore) / 2;

// NaN = Not a Number 
console.log(Boolean(0));
Number(null) // 0
Number(undefined) // NaN