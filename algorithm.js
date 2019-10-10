var containsDuplicate = function (nums) {
    let result = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            console.log(nums[i],nums[j]);
            if (nums[i] == nums[j]){
                result = true
            } 
        }
    }
    console.log(result);
};
containsDuplicate([1, 2, 3, 1])
