const inputField = document.getElementById("ip");
const button = document.getElementById("btn");
const result = document.getElementById("output");

button.addEventListener("click", promiseHandler);

function promiseHandler() {
	const myPromise = new Promise((resolve, reject) => {
		const num = parseInt(inputField.value);
		setTimeout(() => {
			result.innerHTML = `Result: ${num}`;
			resolve(num);
		}, 2000);
	});

	myPromise
		.then((num) => {
			num *= 2;
			return new Promise((resolve) => {
				setTimeout(() => {
					result.innerHTML = `Result: ${num}`;
					resolve(num);
				}, 1000);
			});
		})
		.then((num) => {
			num -= 3;
			return new Promise((resolve) => {
				setTimeout(() => {
					result.innerHTML = `Result: ${num}`;
					resolve(num);
				}, 1000);
			});
		})
		.then((num) => {
			num /= 2;
			return new Promise((resolve) => {
				setTimeout(() => {
					result.innerHTML = `Result: ${num}`;
					resolve(num);
				}, 1000);
			});
		})
		.then((num) => {
			num += 10;
			return new Promise((resolve) => {
				setTimeout(() => {
					result.innerHTML = `Result: ${num}`;
					resolve(num);
				}, 1000);
			});
		})
		.then((num) => {
			setTimeout(() => {
				result.innerHTML = `Final Result: ${num}`;
			}, 1000);
		})
		.catch((error) => alert(error));
}
