function identity(value) {
    return value;
}
var resultString = identity("Hello, TypeScript!");
var resultNumber = identity(42);
console.log(resultString); // 出力: Hello, TypeScript!
console.log(resultNumber); // 出力: 42
