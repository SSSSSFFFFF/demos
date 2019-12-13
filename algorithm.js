var f = function (s) {
    return s.replace(/-[a-z]/g, function (x) {
        console.log(x);
        return x[1].toUpperCase();
    })
}
var s1 = "get-element-by-id";
console.log(f(s1));
