// 4. 文字列分割

// - 「任意の文章」と「区切り文字」を引数にとり、任意の文章を区切り文字で区切った配列を返す関数を作成してください。
// - `'apple,orange,strawberry'` という文章と `,` という区切り文字を与えたとき `['apple', 'orange', 'strawberry']` という配列が返ることを確認してください。

let fruit: string;
fruit = 'apple,orange,strawberry';

const punctuate = (text: string, character: string): string[] => {
    return text.split(character);
}
console.log(punctuate(fruit, ','));