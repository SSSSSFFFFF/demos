
<svg width='100px' height='100px' version='1.1' xmlns="http://www.w3.org/2000/svg">
    <path d='M10 10 H 90 V 90 H 10 Z' fill='transparent' stroke='black'></path>
</svg>

function groupBy(arr,para){
    let obj ={};
    if(typeof para == 'function'){
        arr.map(i => {
            let str = para(i).toString()
            arrayMap(str, i)
        })
    } else if (typeof para == 'string') {
        arr.map(i => {
            let len =  i.length
            arrayMap(len, i)
        })
    }

    function arrayMap(len,i){
        if (!obj.hasOwnProperty(len)) {
            obj[len] = [i]
        } else {
            obj[len].push(i)
        }
    }
    console.log(obj);
}

// groupBy([6.1, 4.2, 6.3], Math.floor)
// groupBy(['one','two','three'], 'length')

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


// flattenDeep([1, [2, [3, 4], 5]])