//事件触发者
function EventEmitter() {
    this.events = {};
}
//绑定事件函数
EventEmitter.prototype.on = function(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    callback._token=this.getToken();
    return (callback._token);
};
//触发事件函数
EventEmitter.prototype.emit = function(eventName, _) {
    var events = this.events[eventName],
        args = Array.prototype.slice.call(arguments, 1),
        i, m;

    if (!events) {
        return;
    }
    for (i = 0, m = events.length; i < m; i++) {
        events[i].apply(this, args);
    }
};
//移除事件监听,第二参数可以是原来订阅时所传的function对象，也可以是on方法所返回的整数
EventEmitter.prototype.off=function(eventName, callback){
    var events=this.events[eventName];
    if (!events) {
        return;
    }
    if(typeof callback=='function')
        for(var i=0;i<events.length;i++){
            if(events[i]==callback){
                events.splice(i,1);
                return;
            }
        }
    else{
        for(var i=0;i<events.length;i++){
            if(events[i]._token==callback){
                events.splice(i,1);
                return;
            }
        }
    }
}

//获取一个32位的随机字符串
EventEmitter.prototype.getToken=function(len){
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = chars.length;
　　var token = '';
　　for (i = 0; i < len; i++) {
        token += chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return token;
}

export default EventEmitter;