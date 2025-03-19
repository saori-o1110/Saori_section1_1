// 3. 逆さ文字列
// - 文字列を引数に取り、受け取った文字列を逆順にして返す関数を作成してください。
// - `baseball` という引数を与えたとき `llabesab` という文字列が返ることを確認してください。
var str;
str = "baseball";
var reverse = function (str) {
    return str.split("").reverse().join("");
};
console.log(str.split("").reverse().join(""));
