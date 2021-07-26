function solution(record) {
    const answer = [];
    const users = {}
    record.forEach( el => {
        const message = el.split(" ");
        switch(message[0]){
            case "Enter":
                users[message[1]] = message[2];
                answer.push({
                    cmd : '들어왔습니다.',
                    id: message[1],
                });
                break;
            case "Leave":
                answer.push({
                    cmd: '나갔습니다.',
                    id: message[1],
                });
                break;
            case "Change":
                 users[message[1]] = message[2];
        }; 
    });
    return answer.map(el => `${users[el.id]}님이 ${el.cmd}`)
}