// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

r.question("", function (num) {
    const numInterger = parseInt(num);

    let result = 0;
    for (i = 1; i <= numInterger; i++) {
        Nums = i.toString().split('');
        for (j = 0; j < Nums.length; j++) {
            currNum = Nums[j];
            result += (currNum === '3' || currNum === '6' || currNum === '9') ? 1 : 0;
        }
    }
    console.log(result);
    r.close()
})
