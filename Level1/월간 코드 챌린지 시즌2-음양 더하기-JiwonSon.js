function solution(absolutes, signs) {
    // 방법 1)
    // signs.forEach((el, i) => {if(el==false) absolutes[i] *= (-1);})
    // return absolutes.reduce((acc, _, i) => acc += absolutes[i], 0);
    
    // 방법 2)
    return absolutes.reduce((acc, crr, i) => 
            acc += (signs[i] == true ? crr : -crr), 0);
}