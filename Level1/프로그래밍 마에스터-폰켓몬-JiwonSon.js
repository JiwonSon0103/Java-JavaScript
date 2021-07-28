function solution(nums) {
    var answer = 0;
    
    nums.sort((a, b)=> a - b);
    answer++;
    for(var i=1; i < nums.length; i++){
        if(nums[i] > nums[i-1]) answer++;
    }
    
    if(answer >= nums.length/2) answer = nums.length/2;  
    
    return answer;
}