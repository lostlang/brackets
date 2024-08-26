module.exports = function check(str, bracketsConfig) {
	let count = bracketsConfig.map((el) => {
		if (el[0] == el[1]) {
			return true;
		}
		return false;
	});
	let newStr = "";

	let r = str.split("").reduce((acc, el) => {
		bracketsConfig.forEach((brasket, i) => {
			if (brasket[0] == el) {
				if (count[i]) {
					if (newStr[newStr.length - 1] == el) {
						newStr = newStr.slice(0, -1);
					} else {
						newStr += el;
					}
				} else {
					newStr += el;
				}
			} else if (brasket[1] == el) {
				if (newStr[newStr.length - 1] == brasket[0]) {
					newStr = newStr.slice(0, -1);
				} else {
					acc = false;
				}
			}
		});

		return acc;
	}, true);

	if (newStr.length > 0) {
		return false;
	}

	return r;
};
