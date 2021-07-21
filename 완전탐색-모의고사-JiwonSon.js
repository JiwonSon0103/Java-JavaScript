function solution(answers) {
    var answer = [];
    
    var num = answers.length;
    var score = [0,0,0];
    var stu2 = [2,1,2,3,2,4,2,5];
    var stu3 = [3,3,1,1,2,2,4,4,5,5];
    for(var i=0; i<num; i++){
        // score student 1
        if ((i%5+1) == answers[i]) score[0]++;
        // score student 2 
        if (stu2[i%8] == answers[i]) score[1]++;
        // score student 3
        if (stu3[i%10] == answers[i]) score[2]++;
    }
    
    var score_ = [];
    for(var i=0; i<3; i++){
        score_[i] = score[i];
    }
    score_.sort((a,b) => a-b);
    
    for(var i=0; i<3; i++){
        if (score[i] == score_[2]) answer.push(i+1);
    }
    
    return answer;
}