function makeArray(arr,answers) {
    const n  = parseInt(answers.length/arr.length);
    const front =  [].concat(...Array(n).fill(0).map(_=> arr));
    const end = arr.slice(0,answers.length % arr.length);  
    return [...front,...end];
}  
function Count(arr,answers) {
    let count=0;  
    answers.forEach((el,index)=>{ if(arr[index] === el) count ++;});
    return count; 
}
function solution(answers) {
    const answer = [];
    const repeat1 = [1, 2, 3, 4, 5]; 
    const repeat2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const repeat3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];
    const firstAnswer = makeArray(repeat1,answers);
    const secondAnswer = makeArray(repeat2,answers);
    const thirdAnswer = makeArray(repeat3,answers);
    let [count1,count2,count3] = [Count(firstAnswer,answers),Count(secondAnswer,answers),Count(thirdAnswer,answers)];
    let max = 0;
    const answerArray =  [count1,count2,count3]; 
    [count1,count2,count3].forEach(el=>{if(el>=max){ max=el;}})
    answerArray.forEach((el,index)=>{ if(max == el){ answer.push(index+1);} });
    return answer;
}