var findMaxConsecutiveOnes = function(nums) {
    var highestCount = 0;
    var count= 0;
    nums.forEach(el =>{
        if(el === 1){
            count++;
        }
        else if(el!=1 && count!=0){
            if(count > highestCount){
            highestCount = count;
            }
        }
        else{
            count = 0;
        }
    })
    console.log(highestCount);

};

findMaxConsecutiveOnes([1,1,0,1,1,1])