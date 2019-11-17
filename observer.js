/*
    eventList = {
       
    }
    $on(eventName,callback)
    首先判断事件名称是否存在，如果事件名称存在则直接将事件函数添加到数组中去
    如果事件名称不存在的时候创建一个数组，然后将这个事件函数添加到数组中去

    $emit(eventName,params)
    判断事件名称是否存在，如果存在则获取到对应的数组，然后遍历数组执行里面的每一个函数，如果传递了第二个
    参数则将参数传入函数中


    $off(eventName,callback)
    判断事件名称是否存在，如果存在则判断第二个参数是否存在，如果存在则找到当前函数的下标，然后做移除
    如果不存在则将当前数组清空
*/


























var eventList = {}

const $on = (eventName,callback)=>{
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }

    eventList[eventName].push(callback);
}

const $emit = (eventName,params)=>{
    if(eventList[eventName]){
        eventList[eventName].forEach(cb=>{
            cb(params)
        })
    }
}


const $off = (eventName,callback)=>{
    if(eventList[eventName]){
        if(callback){

           let flag =  eventList[eventName].includes(callback);
           if(flag){
               let index = eventList[eventName].indexOf(callback);
               eventList[eventName].splice(index,1);
           }
        }else{
            eventList[eventName].length = 0;
        }
    }
}

function fn1(params){
    console.log(111,params)
}

// function fn2(params){
//     console.log(222,params)
// }


// function fn3(params){
//     console.log(333,params)
// }



// $on("handle",fn1)

// $on("handle",fn2)

// $on("handle",fn3)

// $off("handle",fn1)
// $emit("handle","alley")