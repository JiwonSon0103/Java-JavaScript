function solution(lottos, win_nums) {
    let correct = 0;
    let unknown = 0;
    // win_nums.forEach((num)=>{
    //     if(lottos.indexOf(num) != -1) correct++;
    // });
    // lottos.forEach((zero)=>{
    //     if (zero == 0) unknown++;
    // })
    lottos.forEach(el =>{
        if(win_nums.indexOf(el) != -1) correct++;
        if(el == 0) unknown++;
    });
    
    const max = Math.min(6, 7 - (correct + unknown));
    const min = Math.min(6, 7 - correct);
    
    return [max, min];
}