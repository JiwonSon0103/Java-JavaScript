function solution(s) {
    let char = '';
    let answer = '';
    const charArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    s.split('').forEach(el=> {
        if(parseInt(el) != el){
            char += el;  
            if(charArr.includes(char)){
                answer += charArr.indexOf(char).toString(); 
                char = ''; 
            }
         }
         else{
            answer += el;
            char = '';
        }
    })
    return parseInt(answer);
}