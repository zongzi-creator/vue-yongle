import http from "../utils/request";

export const classify=(classifyid)=>http({
    method:"get",
    url:"/server/category/default.json",
    data:{
        classifyid:classifyid
    }
})

