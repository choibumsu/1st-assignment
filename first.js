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
	const re = /[3, 6, 9]/g;
	let result = 0;

	for (number = 3; number <= numInterger; number++) {
		ThreeSixNine = number.toString().match(re);
		if (ThreeSixNine) { result += ThreeSixNine.length };
	}
	console.log(result);
	
	rl.close()
}).on("close", function () {
	process.exit();
});
