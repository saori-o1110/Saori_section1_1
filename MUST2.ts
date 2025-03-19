// 2. FizzBuzz 関数

// - 数値型を引数に取り、3の倍数のときには `Fizz` 、5の倍数のときには `Buzz` 、3と5の倍数のときには `FizzBuzz` 、それ以外のときには元の数値を返す関数を定義してください。
// - 上記の関数を使って、1～100までの数値の返り値を順番にコンソールに出力してください。

const fizzBuzz = (num: number): number | string => {
    if (num % 3 === 0 && num % 5 === 0) {
        return `FizzBuzz`;
    } else if (num % 3 === 0) {
        return `Fizz`;
    } else if (num % 5 === 0) {
        return `Buzz`;
    } else {
        return num;
    }
}
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));}