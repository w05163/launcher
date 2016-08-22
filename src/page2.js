import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var Pagebody = React.createClass({
  render: function() {
    return (
      <div className="Pagebody">
        <h1>这是page2</h1>
        <a onClick={()=>thisView.goTo('page0.js')}>跳到page0</a>
      </div>
    );
  }
});

var thisView=LAUNCHER.getView();
thisView.addEventListener('load',function(e) {
  ReactDOM.render(<Pagebody/>,thisView);  
})

thisView.addEventListener('show',function (e) {
  console.log(thisView.id+'展示了');
})
thisView.addEventListener('hide',function (e) {
  console.log(thisView.id+'隐藏了');
})