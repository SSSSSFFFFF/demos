var longestCommonPrefix = function (strs) {
    let result = ''
    check(0, strs)
    function check(index,strs) {
        console.log(index, strs)
        for (let i = 0; i < strs[index].length; i++) {
            console.log(strs[index][i]);
        }
        index++
        if (index < strs.length){
            check(index, strs)
        }
    }

    
};
longestCommonPrefix(["flower", "flow", "flight"])