function solution(participant, completion) {
    const hashTable = {};
    participant.forEach(el=> {hashTable[el] ? ++hashTable[el] : hashTable[el] = 1;});
    completion.forEach(el=> {hashTable[el]--;});
    for(let item in hashTable) if(hashTable[item] !== 0) return item;
}