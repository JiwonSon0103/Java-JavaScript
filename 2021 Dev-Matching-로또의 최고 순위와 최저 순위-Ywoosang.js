function solution(lottos, win_nums) {
    let zeroCount = 0; 
    let winCount = 0;
    // 로또 한바퀴 돌면서 0 빼고 win_nums 와 같은 것 개수 뽑아내기
    lottos.forEach(el=>{
        if(win_nums.indexOf(el) !== -1) winCount += 1;
        if(el == 0) zeroCount +=1 ; 
    });
    // 최저순위 
    // 6개 - 1 등
    // 5 개 - 2 등
    // n 개 = 7 - n 등
    const small = winCount < 2 ? 6 : 7 - winCount;
    const big = (winCount+ zeroCount) < 2 ? 6 : 7 - (winCount+ zeroCount);
    
    return [big,small];
}