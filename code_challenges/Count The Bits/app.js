// Prompt:
// - Write a function called countTheBits that accepts a single numeric argument that will be an integer.
// - The function should return the number of bits set to 1 in the number's binary representation.

const countTheBits = (num) => {
	if (num == 0) {
		return 0;
	}
	return (num & 1) + countTheBits(num >> 1);
};
