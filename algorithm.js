var str = '10000000000';
var arr = [];
for (var i = 0; i < Math.round(a.length / 3); i++) {
    arr.push(str.substring(str.length - 3 * (i + 1), str.length - i * 3));
}
arr.reverse();
arr.join('.')
function str2Base64(str){
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr = newStr + '0'+str[i].charCodeAt().toString(2)
    }
    let i = newStr.length/6
    for (let i = 0; i < newStr.length / 6; i++) {
        console.log(newStr.substring(i,i+6));
    }
}
str2Base64("Tom")

var a = 'No. 4120 People\'s Pond Road';
// console.log(a)

function erfen_digui(arr, val, left = 0, right = arr.length - 1) {
    let mid = Math.floor((right + left) / 2)
    if (arr[mid] == val) {
        return '下标为' + mid
    } else if (arr[mid] < val){
        left  = mid +1
    } else if (arr[mid]  > val){
        right = mid -1
    }
    return erfen_digui(arr, val, left,right)
}

// console.log(erfen_digui([0, 1, 2, 3, 6, 51, 56, 77, 989], 1));

function _indexOf(a,b){
    var reg = new RegExp(b,'g')
    var c = reg.exec(a);
    console.log(c);
    console.log(c?c.index:-1)
}
var a = 'abcdefghijkl'
var b = 'def'
// _indexOf(a,b)

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = '1'
const member = new Person("Lydia", "Hallie");

// console.log(member.getFullName);

const cusGetElementByIdByDFS = function (parentNode, id) {
    // 深度优先, 递归实现
    console.log("parentNode", parentNode.children);
    if (parentNode) {
        let target = null;
        const children = Array.from(parentNode.children);
        if (parentNode.id === id) {
            return parentNode;
        }
        for (let i = 0; i < children.length; i++) {
            target = cusGetElementByIdByDFS(children[i], id);
            if (target) {
                return target;
            }
        }
    }
    return null;
}

// 测试代码
// console.log(cusGetElementByIdByDFS(document.querySelector('.wrapper'), 'demo'))


function _new() {
    let target = {};
    let [constructor,...args] = [...arguments]
    console.log(target)
    target._proto_ = constructor.prototype
    console.log(target);
}
// _new(a())

function a() {
    this.sb = '2'
}

//  a.prototype.sth = '1'
//  var b = new a()

// 函数柯里化
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function () {
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        console.log(newArgs);
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn.apply(this, newArgs);
        }
    }
}
function multiFn(a, b, c) {
    return a * b * c;
}
var multi = curry(multiFn);
// console.log(multi(2)(3)(4));
// multi(2, 3, 4);
// multi(2)(3, 4);
// console.log(multi(2, 3)(4));


// sum(1)(3)(7)

var foo = {
    value: 1
};
var window = {
    value: 2
}
var value = 2;
function bar(name, sb, age) {
    this.habit = 'shopping';
    console.log(name)
    console.log(sb);
    console.log(age)
    console.log(this.value);
}

bar.prototype.friend = 'kevin';

Function.prototype.myBind = function (para) {
    var that = this;
    var args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    var newBind =  function (cont) {
        args.push(cont)
        that.apply(this instanceof that ?this : para,args)
    }
    newBind.prototype = this.prototype
    return newBind
}

Function.prototype.myApply = function (para) {
    para = para || window;
    para.fn = this;
    let arr = []
    for (let i = 0; i < arguments[1].length; i++) {
        // arr.push('arguments[' + i+']');
        arr.push(arguments[1][i])
    }
    para.fn(...arr)
    // eval('para.fn(' + arr + ')');
    delete para.fn
}

Function.prototype.myCall = function (para) {
    para = para || window;
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

// bar.myCall(foo, 'kevin', 19);// 1
// bar.myApply(foo, ['kevin', 19]);// 1
var bindFoo = bar.myBind(foo, 'daisy','sb');
// bindFoo('18');

// let obj  = new bindFoo('18');
// console.log("obj:",obj);




// console.log(quickSort([3, 14, 5, 4, 54, 5435, 442, 4321]));
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
            console.log(i)
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