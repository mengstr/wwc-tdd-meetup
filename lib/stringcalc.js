//
// Adds numbers supplied in the argument.
// ============================================
// If an empty string is passed to it, return 0.
//
// The numbers are normally delimited by a comma (,)
//
// But an newline (\n) should also be accepted as a delimiter
//
// If the argument starts with a backslash (\) the following
// character should be treaded as an additional delimiter, this 
// is followed by a newline(\n) just before the numbers.
//
// Don't count numbers larger than or equal to 1000
// 
exports.add = function(numbers) {
	if (numbers==='') return 0;

	// Handle custom delimiter
	if (numbers.substr(0,1)=='\\') {
		// Get the new delimiter
		delimiter=numbers.substr(1,1);
		// Check that the mandadory newline is there
		if (numbers.substr(2,1)!='\n') throw new Error('Missing newline');
		// Keep only the numbers -part of the string
		numbers=numbers.substr(3);
		// Replace the custom delimiter with the standard comma
		numbers=numbers.replace(delimiter,',');
	}

	// We need to accept newline as delimiters, so just replace
	// all newlines with commas
	numbers=numbers.replace('\n',',');

	// Split the argument string into an array of separate numbers
	var nums=numbers.split(',');
	// Sum them all up
	var sum=0;
	for (var i=0; i<nums.length; i++) {
		// Ignore numbers larger then or equal to 1000 
		if (parseInt(nums[i])<1000) { 
			sum+=parseInt(nums[i]);
		}
	}

	return sum;
}

