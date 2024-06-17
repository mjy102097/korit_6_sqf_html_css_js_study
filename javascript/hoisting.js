console.log(a);

var a = 10;


var b = 10;
console.log(b);

var b = 20;
console.log(b);

let c = 30;
console.log(c);
// let c = 40;  재선언은 안되고 재할당은 됨
c = "40";       // 형변환도 됨

const d = 50;       // const : 상수 선언
console.log(d);
// d = 60;          // 재할당 재선언 둘다 안됨
// console.log(d);