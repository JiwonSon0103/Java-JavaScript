function solution(n) {
    let answer = '';
    
    do {
        n = n-1;
        switch(n%3){
            case 0:
                answer = answer + '1';
                break;
            case 1:
                answer = answer + '2';
                break;
            case 2:
                answer = answer + '4';
        } 
        n = parseInt(n/3);
    } while(n != 0);
    
    return answer.split("").reverse().join("");
}