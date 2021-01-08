interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user)
}

const hhj = {
  name: '효정',
  age: 100
}

getUser(hhj);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  // 인자, 반환타입 정의
  (a: number, b: number): number;
}

var sum: SumFunction;

sum = function(a: number, b: number):number {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; error number 형식은 string에 할당할수 없음
arr[0] = 'd';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; // RegExp : 정규표현식
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';

// 인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var hhj_dev: Developer = {
  language: 'ts',
  age: 100,
  name: '효정'
}