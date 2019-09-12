// Run by Node.js
// 은행 예금 이자 구하기
// node second.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function (line) {
	const numbers = line.split(" ").map((number) => parseFloat(number));
	const money = numbers[0], rate = numbers[1], year = numbers[2];

	const result = money * (1 + rate / 100) ** year;
	console.log(result.toFixed(2));

	rl.close();
}).on("close", function () {
	process.exit();
});

