function solution(absolutes, signs) {
    return absolutes.reduce((acc,crr,index) => { return signs[index] === true ? (acc+crr): (acc -crr); },0  )
}