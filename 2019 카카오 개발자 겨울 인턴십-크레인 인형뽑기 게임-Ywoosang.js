function solution(board, moves) {
    var answer = 0;
    const tmpArr= [];
    moves.forEach(num =>{
        const index = num -1;
        for(let i=0; i<board.length; i++){
             if(board[i][index]){
                 tmpArr.push(board[i][index]); 
                 board[i][index] = 0;
                 break;
             }
        }
    });
    const testArr = []; 
    tmpArr.forEach(el=>{
        if(testArr[testArr.length-1] == el){
            testArr.pop();
            answer+=2;
        } else{
            testArr.push(el)
        }
    })
    return answer;
};