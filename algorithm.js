
//=>[1,2,3,45]
function flattenDeep(arr){
    let newArr = [];
    arrMap(arr)
    function arrMap(arr){
        arr.map(i => {
            if (typeof (i) == 'number') {
                newArr.push(i)
            } else {
                arrMap(i)
            }
        })
    }
    

    console.log(newArr);
}


flattenDeep([1, [2, [3, 4], 5]])