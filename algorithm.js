var numJewelsInStones = function (J, S) {
    let arr = J.split("");
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < S.length; j++) {
            // console.log(arr[i], S[j]);
            // console.log(S[j].indexOf(arr[i]));
            if (S[j].indexOf(arr[i]) != -1 ) {
                num ++;
            }
        }
    }
    // console.log(num);
    return num
};
numJewelsInStones("aA", "aAAbbbbA")