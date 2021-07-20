function solution(nums) {
   const num = nums.length/2, tmp = []; ;
   nums.forEach(el=> {if(!tmp.includes(el)) tmp.push(el)});
   num > tmp.length ? answer = tmp.length : answer = num ; 
   return answer;
}