// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function (num) {
	const numInterger = parseInt(num);
	const re369 = /[3, 6, 9]/g; //3 6 9 만 남길 정규표현식
	let result = 0;

	for (curr_num = 3; curr_num <= numInterger; curr_num++) {
		arr369 = curr_num.toString().match(re369); //숫자를 문자로 바꾼 뒤 정규표현식 적용
		if (arr369) result += arr369.length; //3 6 9만 남은 char string의 길이를 더함
	}
	console.log(result);

	rl.close()
}).on("close", function () {
	process.exit();
});
