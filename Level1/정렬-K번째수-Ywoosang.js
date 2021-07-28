function solution(array, commands) {
    return commands.map(el => {
        const [i,j,k] = el;
        return array.slice(i-1,j).sort((a,b)=> a-b)[k-1];
    });
}


