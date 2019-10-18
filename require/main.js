require.config({
    paths: {
        "jquery": './jquery.min',
        "test1": './test1',
        "test2": './test2'
    }
});
console.log(1);
require(['jquery'], function ($) {
    //通过此方式引入jquery才能使用$，接下来正常写jquery代码就好
    require(['test1'], function (x) {
        console.log(x.test1());
    });
     require(['test2'], function (x) {
         console.log(x.test3());
     });
})



