function solution(n) {
    var answer = '';
    const word = "수박";
    const cnt = parseInt(n/2);
    const rem = n%2;
    for(let i=0; i<cnt; i++){
        answer += word;
    }
    answer += word.slice(0,rem)
    return answer;
}
