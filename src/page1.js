import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var Pagebody = React.createClass({
  render: function() {
    return (
      <div className="Pagebody">
        <h1>这是page1</h1>
        <a onClick={()=>thisView.goTo('page2.js')}>跳到page2</a>
      </div>
    );
  }
});

var thisView=LAUNCHER.getView();
thisView.addEventListener('load',function(e) {
  console.log('在load事件收到page0带过来的参数'+e.params);
  ReactDOM.render(<Pagebody/>,thisView);  
  console.log(this.id+'渲染完了，创建者是'+this.getCreater());
})

thisView.addEventListener('show',function (e) {
  console.log(thisView.id+'受'+e.caller+'召唤');
  console.log(thisView.id+'展示了');
})
thisView.addEventListener('hide',function (e) {
  console.log(thisView.id+'隐藏了');
})

thisView.addEventListener('message',function (e) {
  console.log('收到"'+e.from+'"post的信息'+JSON.stringify(e.data));
  thisView.postMessage('page0.js',{
      title:'message返回',
      content:'收到了你的信息了'
    });
})
