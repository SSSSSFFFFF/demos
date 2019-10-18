define(function () {
    var test1 = function () {
        console.log("test1");
        $("body").text("1")
        return "test1"
    };
    return {
        test1: test1
    };
})
