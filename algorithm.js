var calculate = function (s1) {
    s = s1.replace(/\(/g, '').replace(/\)/g, '').replace(/\s/g, '')
    let num = 0;
    console.log(s);
    let s0 = 0;
    if (Number(s) == Number(s1)) {
        return Number(s)
    } else {    
        for (let i = 0; i < s.length; i++) {
            s0 = Number(s[0])
            if (s[i] == '+') {
                num = num + Number(s[i + 1])
            } else if (s[i] == '-') {
                num = num - Number(s[i + 1])
                console.log(num);
            }
        }
        num = num + s0
        console.log(num)
        return num
    }
    
};

calculate("1-11")