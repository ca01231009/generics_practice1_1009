function identity<T>(value: T): T {
    return value;
}


let resultString: string = identity("Hello, TypeScript!");
let resultNumber: number = identity(42);

console.log(resultString); // 出力: Hello, TypeScript!
console.log(resultNumber); // 出力: 42
