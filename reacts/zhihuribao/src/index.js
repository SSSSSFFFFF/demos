import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
// import request from 'request';
$.ajax({
    type: "get",
    url: "https://news-at.zhihu.com/api/4/news/latest",
    dataType: "jsonp",
    jsonp: "callback",
    success: function (response) {
        console.log(response);
    },
    error:function(err){
        console.log(err);
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
