import http from "../utils/request";

export const classify=(classifyid,pageStartRow)=>http({
    method:"get",
    url:"/server/category/default.json",
    data:{
        classifyid:classifyid,
        pageStartRow:pageStartRow
    }
})

