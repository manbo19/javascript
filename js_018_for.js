//js_018_for.js
/*
  for문

  for문은 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.
  for(초기값; 조건식; 증감식){
     실행문;
  }

  초기값 -> 조건식(true) -> 실행문 -> 증감식
        -> 조건식(true) -> 실행문 -> 증감식
        -> 조건식(false) -> 반복문 빠져나감
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("===============================");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("===============================");

// for문에서 조건식을 생략하면 무한루프로 실행된다.
let i, sum;

for (i = 1, sum = 0; ; i++) {
  sum += i;
  if (sum >= 30) break;
}

console.log(`i=${i} sum=${sum}`);

console.log("===============================");

/*1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하세요.
짝수: ?
홀수: ?
*/

let odd = 0; //홀수누적
let even = 0; //짝수누적

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd += i;
  } else {
    even += i;
  }
}

console.log(`짝수:${even}`);
console.log(`홀수:${odd}`);

console.log("===============================");