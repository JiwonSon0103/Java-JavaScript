function solution(price, money, count) {
    // Array(count).fill(price).forEach((el,index) => money -= (index+1)*el);
    // return money<0 ? -money : 0;
    const calc = Array(count).fill(price).reduce((acc,cur,index)=>  (acc - cur*(index+1)),money);
    return calc < 0 ? -calc : 0;
};