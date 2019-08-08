var foo = {
    value: 1
};

function bar(name,age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}



Function.prototype.mycall = function (context) {
    context.fn = this;
    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn;
}

bar.mycall(foo,'kevin',18);