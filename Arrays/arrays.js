// returns either an array of numbers that add up to the target or an empty array.

function twoNumberSum(array, targetSum) {
	for (let i = 0; i < array.length - 1; i++){
		const num1 = array[i];
	
	//  0(n);
		for (let j = i + 1; j < array.length; j++){
			const num2 = array[j];
            // 0(n) --> n * n = n ^ 2;
		if (num1 + num2 === targetSum){
			return [num1, num2];
		}
		}
	}
		return [];
}



function twoNumberSum(array, targetSum) {
    const nums = {}; // create a hash table to check values; will have a space complexity of 0(n) too.
      for (const num of array){ // 0(n)
          const match = targetSum - num;
          if (match in nums){
              return [num, match]
          } else {
              nums[num] = true
          }
      }
      return [];
  }

  // 0(n);

 
  function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b) //   0(n) log(n)
        let left = 0; // left pointer   
        let right = array.length - 1; //right pointer
        while (left < right){ // 0(n)
            const sum = array[left] + array[right];
            if (sum === targetSum){
                return [array[left], array[right]];
            } else if  (sum < targetSum) {
                left ++;
        } else if (sum > targetSum){
            right--;
        }
    
        }
    return[]
    }

    