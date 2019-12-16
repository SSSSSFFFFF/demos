function curry(fn) {
    return function judgeCurry(...args) {
        return fn.length > args.length ?
            (...args1) => judgeCurry(...args, ...args1) :
            fn(...args);
    }
}

function ab(a,b) {
    return a + b
}

console.log(curry(ab)(2)(3));
