/* Given an array nums. We define a runnig sum mof an array as runningSum[i] = sum(nums[0]…nums[i]) 
return the running sum of nums */

//First Sollution

var runningSum = function(nums){
    //current sum
    let total = 0;
    //add our running sum
    let result1 = [];
    //loop to go through all nums in array
    for(let i = 0; i < nums.length; i++){
        total = total + nums[i];
        result1.push(total);
    }
    return result1;

}

console.log(runningSum([1,2,3,4]));

//alternative solution
//function that takes the parameter nums
const runningSum2 = nums => {
    let result2 =[]
    let currentSum = 0;
    for(let i=0; i<nums.length; i++){
        let cv = nums[i]
        currentSum += cv;
        result2.push(currentSum)

    }
    return result2;
};

console.log(runningSum2([1,2,3,4]));



