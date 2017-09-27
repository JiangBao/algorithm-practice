const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		let complement = target - nums[i];
		const index = nums.indexOf(complement);
		if(index !== -1 && index !== i) {
			return [i, index];
		}
	}
	throw new Error('No two sum sollution');
}