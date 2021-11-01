

// document.write('外部文件的写入\n')
// console.log("外部文件的\n", document)

//标识符,变量支持，数字Number(包括整数和浮点数)、字符串String、Bboolean、Null、Undefined、Object(引用数据类型)
//数字中：Infinity表示无穷大，超过最大阿表示范围
//浮点数的运算会失去精确性，因为二进制
// var a;
// a = 10;
// console.log('a的类型是：', typeof a);
// a = '字符串';
// console.log('a的类型是：', typeof a);
// a = true;
// console.log('a的类型是：',typeof a);
// a = null;
// console.log('a的类型是：',typeof a);
// a = undefined;
// console.log('a的类型是：',typeof a);
// a = {
//   name:'yc',
//   age:18
// };
// console.log('a的类型是：',typeof a);
// console.log(a['age'])
// a.sex='男';//点可以新增并赋值属性,属性不存在，则新增属性
// console.log(a.name);
// a = [1,2,3]
// console.log(typeof a);





function moveon() {
  //同弹出一个问讯对话框
  var answer = confirm("准备好了吗？");

  if (answer) window.location = 'http://www.baidu.com';
}

//定时启动一个方法
// setTimeout(moveon,10000);

function debug(msg) {
  var log = document.getElementById('debuglog');

  //如果节点不存在，则创建该节点
  if (!log) {
    log = document.createElement('div');//创建一个div元素
    log.id = 'debuglog';//给该元素的id赋值为debuglog
    log.innerHTML = '<h1>Debug Log</h1>';//定义该元素的初始内容
    document.body.appendChild(log);//将该元素添加到文档的末尾

    //将消息包装在pre标签中，并添加到log中
    var pre = document.createElement('pre');
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
  }
}

function hide(e, refolow) {
  if (refolow) {
    e.style.display = 'none';//隐藏e这个元素，其所占空间也消失
  }
  else {
    e.style.visibility = 'hidden';//隐藏元素，但所占空间依旧存在
  }
}

//通过设置CSS类高亮显示e元素
function hightLight(e) {
  if (!e.className) e.className = 'hilite';
  else e.className += 'hilite';
}

window.onload = function () {
  var buttons = document.getElementsByTagName('button');//找到所有的<button>标签

  for (var i = 0; i < buttons.length; ++i) {
    // buttons[i].onclick =function () {alert('按钮点击事件被处理');}
    if (buttons[i].addEventListener) buttons[i].addEventListener('click'
      , function () { alert('事件监听器被出发'); }
      , true);
    else buttons[i].attachEvent('click', function () { alert('事件监听器发'); })
  }
}

var a = [1];
a[2] = 3;
console.log(a[0], a[1], a[2])