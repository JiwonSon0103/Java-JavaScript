function solution(numbers) {
    var answer = [];
    
    // 값 구하기 
    const len = numbers.length;
    for(var i=0; i<len; i++){
        for(var j=i+1; j<len; j++)
        answer.push(numbers[i] + numbers[j]);
    }
    
    // 중복 제거
    // 방법 1)
    answer = answer.filter((el,i)=>{
        return answer.indexOf(el)===i;
    });
    // 방법 2)
    // const set = new Set(answer);
    // answer = [...set];
    
    // 정렬
    answer = answer.sort((a,b)=>a-b);
    
    return answer;
}
