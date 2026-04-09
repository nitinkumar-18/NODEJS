class MyEventEmitter {
    constructor(){
        this._events = {};
    }

    on(eventName, handler){
        if(this._events[eventName]){
            this._events[eventName].push(handler);
        } else {
            this._events[eventName] = [handler];
        }
    }

    emit(eventName, ...args){
        this._events[eventName]?.forEach(handler=>{
            handler(...args);
        });
    }
}

const emitter = new MyEventEmitter();

emitter.on('x',()=>{
    console.log("EMITTER EVENT INTO 1")
});

emitter.on('x',()=>{
    console.log("EMITTER EVENT INTO 2")
});

emitter.emit("x");

emitter.on("y",(a,b,c)=>{
    console.log("emitter event");
    console.log(a,b,c)
});

emitter.emit("y",1,2,6);
