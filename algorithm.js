
// console.log(quickSort([3, 14, 5, 4, 54, 5435, 442, 4321]));
var foo = {
    value: 1
};
var value = 2;
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

Function.prototype.myCall = function (para) {
    if (!para) {
        para = window;
    }
    console.log(para);
    para.fn = this;
    let arr = []
    for (let i = 1; i < arguments.length; i++) {
        // arr.push('arguments[' + i+']');
        arr.push(arguments[i])
    }
    para.fn(...arr)
    // eval('para.fn(' + arr + ')');
    delete para.fn
}

// bar.myCall(foo, 'kevin', 19);;// 1
bar.myCall(null);;// 1




// quickSort([3, 14, 5, 4, 54, 5435, 442, 4321])
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    let index = Math.floor(arr.length / 2) 
    let num = arr.splice(index,1)[0]
    let left = [], right= [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([num], quickSort(right));
};
//插入排序
function InsertionSort(array){
    for (let i = 0; i < array.length; i++) {
        preIndex = i - 1;
        current = array[i];
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
        }
        array[preIndex + 1] = current;
    }
    console.log(array)
}
// 选择排序
function SelectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        minIndex = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    console.log(array);
}
// 冒泡排序
function BubbleArr(array) {
    for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1 ; j++) {
                if (array[j + 1] < array[j]){
                    let newNum = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = newNum
                }
        }
        console.log(array)
    }
}


function draw(){
    var ctx = document.getElementById('canvas').getContext('2d')
    console.log(ctx);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <3; j++) {
            ctx.save();
            ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255';
            ctx.translate(10+j*50,10+i*50)
            ctx.fillRect(0,0,25,25)
            ctx.restore();
        }
    }
}
// draw()

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