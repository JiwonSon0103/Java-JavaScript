function solution(n) {
    var answer = '';
    
    const soo = '수';
    const bak = '박';

    for (var i=0; i<n; i++) {
        if (i%2 == 0) answer = answer.concat(soo); 
        else answer = answer.concat(bak); 
    }
    
    return answer;
}