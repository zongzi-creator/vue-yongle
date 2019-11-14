import http from "../utils/request";

export const classify=(pagenum)=>http({
    method:"get",
    url:"/server/category/default.json",
    data:{
        pagenum:pagenum,
    }
    // https://m.228.cn/server/category/default.json
    // 全部分类请求接口
});

export const detail=(pid)=>http({
    method:"get",
    url:'/server/product/ticket-'+ pid +'.json',
    data:{
        // nc:30,
        // pid:614829852
        // nc:nc,
        pid:pid+".html"
    }
    // /https://m.228.cn/server/product/ticket-614829852.json?pid=614829852.html
    //详情页请求接口
});

export const recommend=()=>http({
    method:"get",
    url:'/server/content/index.json',
    data:{
    }
    // https://m.228.cn/server/content/index.json    
    //首页请求接口

});

export const site=(type,fcity,pageNum)=>http({
    method:"get",
    url:'/server/content/moreProductPlay.json',
    data:{
        type:type,
        fcity:fcity,        
        pageNum:pageNum
    }
        
    // https://m.228.cn/server/content/moreProductPlay.json?fcity=1&pageNum=1&type=1
    //场馆请求接口
});

// https://m.228.cn/server/venue/143649.json
