function solution(n) {
    const rec = (answer,num)=>{
        const value = (num - 1) % 3 == 0 ? 1 : (num - 1) % 3 == 1 ? 2 : 4;
        answer  = value.toString() + answer;
        return parseInt((num-1)/3)==0 ? answer: rec(answer,parseInt((num-1)/3));
    }
    return rec("",n); 
}