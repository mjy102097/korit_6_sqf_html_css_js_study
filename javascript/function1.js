function add(x, y) {
    return x + y;
}

const result = add(10, 20);
console.log(result);

function add(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

add(40, 50, 60);
// 자바스크립트는 오버로딩이 안됨(이름이 같은 함수를 매개변수로 구분 하는것)