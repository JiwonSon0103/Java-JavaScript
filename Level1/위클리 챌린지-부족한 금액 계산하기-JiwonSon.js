function solution(price, money, count) {
    let cost = 0;
    for(let i=1; i<=count; i++){ cost += price*i}
    return Math.max(0, cost-money);
    
//  const arr = Array(count);
//  arr.fill(price);
//  return Math.max(0, arr.reduce((cost, crr, i) => cost += crr*(i+1), 0) - money);
}