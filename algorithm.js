var maxNumberOfBalloons = function (text) {
    let arr = "balon"
    let b = 0,
        a = 0,
        l = 0,
        o = 0,
        n = 0;
    for (let i = 0; i < text.length; i++) {
        if (arr.indexOf(text[i]) >= 0) {
           switch (text[i]) {
                case "b":
                   b++
                   break;
                case "a":
                    a++
                    break;
                case "l":
                    l++
                    break;
                case "o":
                    o++
                    break;
                case "n":
                    n++
                    break;
                default:
                   break;
           }
          
        }
    }
    console.log(b,a,l,o,n)
    let max = 0;
     if(l<o){
        max = o
     } else {
       max = l
     }
    let resultnum = Math.floor(max / 2)
    if (resultnum <= b && resultnum <= a && resultnum <= n ) {
        return resultnum
    } else {
        let newArr = [b,a,n]
        return newArr.sort()[0]
    }
};
maxNumberOfBalloons("ballon")