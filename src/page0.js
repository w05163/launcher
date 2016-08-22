import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var Pagebody = React.createClass({
  sendMessage:function() {
    thisView.postMessage('page1.js',{
      title:'这是标题',
      content:'这是内容'
    });
  },
  go:function(){
    thisView.goTo('page1.html','参数测试');
  },
  render: function() {
    return (
      <div className="Pagebody">
        <h1>这是page0 就是首页</h1>
        <a onClick={this.go}>跳到page1</a>
        <a onClick={()=>thisView.goTo('#sanPage','参数测试')}>跳到子页</a>
        <h1 onClick={this.sendMessage}>点击给page1发送信息</h1>
      </div>
    );
  }
});

var thisView=LAUNCHER.getView();
thisView.addEventListener('load',function(e) {
  ReactDOM.render(<Pagebody/>,thisView); 
  thisView.prefetch('page2.js',1);
  let view=thisView.prefetch('#sanPage',3);
  view.innerHTML='这个是子页面';
})

thisView.addEventListener('show',function (e) {
  console.log(thisView.id+'展示了');
})
thisView.addEventListener('hide',function (e) {
  console.log(thisView.id+'隐藏了');
})

thisView.addEventListener('message',function (e) {
  console.log('收到"'+e.from+'"post过来的信息'+JSON.stringify(e.data));
})