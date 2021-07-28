# 폰켓몬

```js
function solution(nums) {
   const num = nums.length/2;
   const tmp = new Set(nums);
   return num > [...tmp].length ? [...tmp].length : num ; 
}
```
Set은 ES6에서 등장한 새로운 데이터 object이다. Set은 unique한 값만 저장할 수 있도록 하기 때문에 Array에 넣게 되면 중복되는 값이 사라진다.  

이를 다시 Spread Oprator를 활용하여 배열로 변환하면 처음 배열에서 중복값이 제거된 상태가 된다. 
```js
const arr = [3,2,2,1,4,5,5,7,7,7,8];
const set = new Set(arr); // {3, 2, 1, 4, 5, 7, 8}
console.log(typeof set); // object
console.log([...set]); // [3, 2, 1, 4, 5, 7, 8] 
```
Array 오브젝트의 from 메서드를 이용해 오브젝트를 배열로 변환할 수도 있다. Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만든다.
  
https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/from 
```js
console.log(Array.from(set)); // [3, 2, 1, 4, 5, 7, 8] 
```

# 음양 더하기

reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다. 누산기accmulator (acc) 는 콜백의 반환값을 누적한다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값이다.
```js 
arr.reduce((acc,cur,index,src)=> ...,initialValue);
``` 
map 을 이용해 배열의 특정 값을 뽑아 새로운 배열로 만들고 reduce 함수를 실행할 수 있다. 초기값을 -Infinity 로 줘서 max 함수를 통과한 값을 crr 에 저장하고 마지막 요소까지 순회가 끝났다면 crr 에 해당하는 값을 리턴하므로 가장 큰 원솔의 값을 찾을 수 있다.
```js
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce(( max, cur ) => Math.max( max, cur ), -Infinity );
```
문제에서는 다음과 같이 응용할 수 있었다.
```js
function solution(absolutes, signs) {
    return absolutes.reduce((acc,crr,index) =>   acc += signs[index] === true ? crr: -crr,0  )
}
```
# 수박수박수박수박수박수?
```js
answer += "수박".repeat(n/2) + "수박".slice(0,n%2);
```








