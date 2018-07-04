import http from './http.js';
import axios from 'axios';
import $ from "jquery";
import { add } from './math.js';
const a = 16;
console.log(a);
console.log(add(12, 34));
console.log("welcome login");
axios({
    method: 'get',
    url: "/opsRegionHealth/indexMap",
    params: {
        date: "2018-04-04",
        type: "1"
    }
}).then((res) => {
    console.log("axios")
    console.log(res.data);
})
$.get({
    url: "/opsRegionHealth/indexMap",
    data: {
        date: "2018-04-04",
        type: "1"
    },
    success: function (res) {
        console.log("jquery");
        console.log(res)
    }
})
http.get('/posts', {
    params: {
        userId: 1
    }
}).then(res => {
    console.log(res.data);
})