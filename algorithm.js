
function multiFn(a, b, c) {
    console.log(a,b,c)
    return a * b * c;
}

function ownCurry(params,...moreArrs) {
    return function(...para){
        let arr = [] 
        let moreArr = arr.concat(moreArrs,para )
        let len = moreArr.length
        if (len < params.length){
            return ownCurry.call(this, params, ...moreArr)
        }  else {
            return params.apply(this, moreArr)
        }
    }
}

let multi = ownCurry(multiFn)

// multi(2, 3, 4);
console.log(multi(2)(3)(4))
console.log(multi(2, 3)(4));
console.log(multiFn(2)(3)(4));

let a = {
    value: 1
}
Function.prototype.ownCall = function (obj) {
    var context = context || window
    obj.that = this
    var args = [...arguments].slice(1)
    var result = obj.that(...args)
    delete obj.that
    return result
}
Function.prototype.ownApply = function (obj) {
    var context = context || window
    obj.that = this
    var args = arguments[1]
    var result = obj.that(...args)
    delete obj.that
    return result
}
Function.prototype.ownBind = function(obj){
    let that = this;
    var args = [...arguments].slice(1)
    return function F() {
        if (this instanceof F) {
            console.log(...args,'???',...arguments)
            return new that(...args, ...arguments)
        }
        return that.apply(obj, args)
    }
}


function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

// getValue.ownCall(a, 'yck', '24')
// getValue.ownApply(a, ['yck', '24'])
// getValue.ownbind(a, 'yck', '24')()
// let func = getValue.ownBind(a, 'yck')
// new func('1')
// getValue.ownBind(a, 'yck', '24')()



function halfSearch1(arr, num ,len){
    len = Math.floor(arr.length / 2);//2
    function recursion(arr, num, len){
        if (num < arr[len]) {
            len = Math.floor(len / 2);
        } else if (num == arr[len]) {
            return len
        } else {
            len = len+ Math.floor(len / 2)
        }
        return recursion(arr,num,len)
    }
    return recursion(arr, num, len)
}

function halfSearch(arr, num){
    let saveArr = JSON.parse(JSON.stringify(arr))
    function recursion(arr, num){
        let halfNum = Math.floor(arr.length / 2);
        if (num < arr[halfNum]) {
            arr.splice(halfNum)
        } else if (num > arr[halfNum]) {
            arr = arr.splice(halfNum + 1)
        } else {
            return saveArr.indexOf(arr[halfNum])
        }
        return recursion(arr, num) //[1,3],3,0
    }
    return recursion(arr, num)
    
}
// console.log(halfSearch1([1, 3, 4, 5, 20], 20));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if(!head) {
        return null;
    }
    while (head) {
        let next = head.next;
        next
    }
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s == ' ' || s.length == 1) {
        return 1
    }
    let result = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length+1; j++) {
            if (test(s.substring(i, j))){
                if (s.substring(i, j).length > result) {
                    result = s.substring(i, j).length
                }
            }
            
        }
    }
    test(s)
    function test(s) {
        for (let i = 0; i < s.length; i++) {
            if (s.indexOf(s[i]) != i){
                return false
            }
        }
        return true
    }
    // console.log(result);
    return result
};
// lengthOfLongestSubstring("aabaab!bb");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(null);
    let nextRst = result;
    // 进位
    let params = 0 // 传给下一个层级的值
    let val = 0 // 传给当前层级的值

    while (l1 != null || l2 != null) {
        // TODO
        let x = (l1 != null) ? l1.val : 0;
        let y = (l2 != null) ? l2.val : 0;

        val = (x + y + params) % 10;
        params = Math.floor((x + y + params) / 10);

        nextRst.next = new ListNode(val)
        nextRst = nextRst.next

        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next

    }

    if (params) {
        nextRst.next = new ListNode(params)
    }

    return result.next
};
// addTwoNumbers([2,4,3],
// [5, 6, 4])


var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target){
               return [i ,j];
            }
        }
    }
};
// console.log(twoSum([3, 2, 4],
// 6))


function addSome(m){
    let temp = function (...args) {
        console.log(m, args);
        return addSome(m + args.reduce((a, b) => a + b))
    }
    temp.toString = function(){
        return m
    }
    return temp
}

// let result


// //递归
let secIndex = 0
// function twoSum(arr, num, index = 0) {
//     // console.log(arr, num);
//     if (arr[index] == num - arr[secIndex] && index != secIndex) {
//         result = new Array(index, secIndex)
//         return result
//     } else {
//         secIndex++
//         if (secIndex < arr.length) {
//             return twoSum(arr, num,index)
//         } else {
//             secIndex = 0
//             index++
//             if (index < arr.length) {
//                return twoSum(arr, num, index)
//             }
//         }
//     }
// }



function changeObjProperty(o) {
    o.siteUrl = "http://www.baidu.com"
    o = new Object()
    o.siteUrl = "http://www.google.com"
    console.log(o.siteUrl)
}
let webSite = new Object();
// changeObjProperty(webSite);
// console.log(webSite.siteUrl);

function name(params,index) {
    let num = Number(params[index]) +1
    index++
    // console.log(index, num);
    if (index< params.length){
        return num.toString() + name(params,index)
    } else {
        return num
    }
}
// console.log(name('723456777',0));

function reserve(num) {
    let str = num.toString();
    let len = str.length
    let first = str[len - 1]
    if (str.length > 1) {
        return first + reserve(str.substring(0, len-1))
    } else {
        return first
    }
}
// console.log(reserve(723456777));
// console.log(typeof(reserve(723456777)));


// function Foo() {
//     Foo.a = function () {
//         console.log(1)
//     }
//     this.a = function () {
//         console.log(2)
//     }
// }
// Foo.prototype.a = function () {
//     console.log(3)
// }
// Foo.a = function () {
//     console.log(4)
// }
// Foo.a();//4
// let obj = new Foo();
// // obj.a();//2
// Foo.a();//1

function print(n) {
    setTimeout(() => {
        console.log(--i);
    }, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 10; i++) {
    // print(i);
}

function x7(x) {
    let arr = Array(x)
    let resultArr = [...arr, ...arr, ...arr, ...arr, ...arr, ...arr, ...arr]
    console.log(resultArr.length);
    return 
}
// x7(10)
// matchUrl('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33')
function matchUrl(url) {
    let result = url.match(/elective=\d*,*\d*/)
    console.log(result);
}

// continuity('1,2,3,5,7,8,10,12,15,20,1,2')
function continuity(str) {
    let arr = str.split(',')
    let result = ''
    let start = arr[0]
    let last = ''
    add(0,1)
    function add(num1,num2) {
        if (Number(arr[num1]) + 1 != arr[num2]) {
            last = arr[num1]
            if (start == last ){
                result = result +','+last
            } else {
                result = result +',' + start + '~' + last
            }
            start = arr[num1+1]
        }
        if (num2 < arr.length){
            add(num2, num2 + 1)
        }
    }

    console.log(result.substring(1));
}


// toObjtoObj()
function toObjtoObj(){
    var entry = {
        a: {
            b: {
                c: {
                    dd: 'abcdd'
                }
            },
            d: {
                xx: 'adxx'
            },
            e: 'ae'
        }
    }
    var result = {}
    function toObj(obj, name='') {
        for (const key in obj) {
            if (typeof (obj[key]) == 'string') {
                result[name+'.'+key] = obj[key]
            } else {
                if (name){
                    paname = name + '.' + key
                } else {
                    paname = key
                }
                toObj(obj[key], paname)
            }
        }
    }
    toObj(entry)
    console.log(result);
}

var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae',
    'b.e':'cc',
}

// doSth(entry)
function doSth(obj){
    let output = {}
    for (const key in obj) {
        console.log(key,obj[key]);
        let arr = key.split('.')
        if (!output[arr[0]]){
            output[arr[0]] = Object.create(null)
        }
        // output.a
        let moreObj = output[arr[0]]
        for (let i = 1; i < arr.length; i++) {
            //arr[i]:b,c,dd
            if (i == arr.length -1){
                moreObj[arr[i]] = obj[key]
            } else {
                moreObj[arr[i]] = Object.create(null)
            }
            // 取下一层a.b
            moreObj = moreObj[arr[i]]
        }
    }
    console.log(output);
}

function arrayOnlyOne(arr) {
    // console.log(...arr);
    // arr.map
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                console.log(arr[i]);
            }
        }
    }
}
// arrayOnlyOne([123, "meili", "123", "mogu", 123])

function getLength(str){
    const arr = str.match(/(\w)\1*/g);
    const maxlen = Math.max(...arr.map(s => s.length));
    let result  = {};
    arr.map(i=>{
        if (i.length == maxlen){
            result[i[0]] = maxlen
        }
    })
    console.log(result);
}
// getLength('abbkeebb')

function getOne1(num){
    let a = 1;
    let result = 0
    while (a < num){ 
        console.log(a);
        result = result + a
        a = a * 10
    }
    console.log(result);
}
// console.time()
// getOne1(200)
// console.timeEnd()


//448
function getOne(num){
    let result = 0
    for (let i = 1; i <= num; i++) {
        if (i.toString().match(/[1]/g)){
            result = result + i.toString().match(/[1]/g).length
        }
    }
    console.log(result);
}
// getOne(200)



function threePoint(str){
    str = '0' * (3 - str.length % 3)+str
    let newStr = ''
    for (let i = 0; i < Math.floor(str.length/ 3); i++) {
        console.log(str.substring(i,i+3));
        str.substring(i, i + 3)+'.'
        newStr = newStr + str.substring(i, i + 3) + '.'
    }
    console.log(newStr.substring(1, newStr.length-1));
}
// threePoint('10000000000')

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
// str2Base64("Tom")

// var a = 'No. 4120 People\'s Pond Road';
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
// var a = 'abcdefghijkl'
// var b = 'def'
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

// function a() {
//     this.sb = '2'
// }

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

// var multi = curry(multiFn);
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


// flattenDeep([1, [2, [3, 4], 5]])