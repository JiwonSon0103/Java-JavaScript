function solution(s, n) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let text = s.split('');
    
    text.forEach((el, i)=>{
        if(el != ' '){
            const isLower = el.toLowerCase() === el ? true: false;
            if(isLower){    // 소문자일 때
                const idx = alphabet.indexOf(el);
                text[i] = alphabet[(idx + n)%26];
            } else {        // 대문자일 때
                const idx = alphabet.indexOf(el.toLowerCase());
                text[i] = alphabet[(idx + n)%26].toUpperCase();
            }
        }
    });
    
    return text.join('');
}