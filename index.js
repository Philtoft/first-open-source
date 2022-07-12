function isEven(number) {
	// If not a number
	if (typeof number !== "number") return false;

	return number % 2 == 0 ? true : false;
}

module.exports = isEven;
