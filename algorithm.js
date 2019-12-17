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
draw()

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