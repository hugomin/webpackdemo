import _ from 'lodash';
import $ from "jquery";
import '../stylesheet/index.css';
import http from './http.js';
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
  const a = 16;
  console.log(a)
  const b = 17;
  console.log(b)
  http.get('/posts', {
    params: {
        userId: 2
    }
}).then(res => {
    console.log(res.data);
})
document.getElementById("button").onclick = function(){
    import ('./asyns.js').then(res=>{
        res.default();
    })
}
$("h1").css("color","red");