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






