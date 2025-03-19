//   ### 1. 数値の配列から最大値を取得する関数を作成してください。

//   - 10個以上の要素を持つ数値型の配列を定義してください
//   - 数値型の配列を引数に取り、その最大値の数値型を返す関数を定義してください。
let arr: number[];
arr = [7, 29, 8, 30, 4, 11, 1, 5, 46, 38, 11, 8];

const maximumValue = (arr: number[]): number =>{
    return Math.max(...arr);
}
console.log(Math.max(...arr));