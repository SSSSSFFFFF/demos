var maximumProduct = function (nums) {
    nums.sort((x, y) => y - x)
    console.log(Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]));
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
};
maximumProduct([-1, -2, -3, 4])