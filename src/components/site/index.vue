<template>
  <ul class="venue cl">
    <li v-for="(item,index) in site" :key="index" :id="item.id">
      <a href="#">
        <img :src="item.urlPic" class="imgs" />
        <b class="db mt5 name">{{item.name}}</b>
        <span class="gray9 venue-address db f11">{{item.position}}</span>
      </a>
    </li>
  </ul>
</template>


<script>
export default {
  name: "Site",
  data() {
    return {
      site: [
        {
          urlPic:
            "http://static.228.cn/upload/2014/10/22/AfterTreatment/1413979266764_h4e0-0.jpg",
          name: "工人体育馆",
          position: "朝阳区三里屯工体北路",
          id: "p1001"
        },
        {
          urlPic:
            "http://static.228.cn/upload/2017/06/22/AfterTreatment/1498115662271_q2h5-0.jpg",
          name: "凯迪拉克中心",
          position: "复兴路69号",
          id: "p1002"
        },
        {
          urlPic:
            "http://static.228.cn/upload/2015/01/09/AfterTreatment/1420773063918_f8t7-0.jpg",
          name: "国家大剧院",
          position: "西城区西长安街2号（天安门西侧）",
          id: "p1003"
        },
        {
          urlPic:
            "http://static.228.cn/upload/2013/12/30/AfterTreatment/1388349756378_v9r4-0.jpg",
          name: "中国儿童中心",
          position: "平安里西大街43号",
          id: "p1004"
        },
        {
          urlPic:
            "http://static.228.cn//upload/2012/01/10/AfterTreatment/1201101527144581-0.jpg",
          name: "东方艺术中心",
          position: "浦东新区丁香路425号",
          id: "p1005"
        },
        {
          urlPic:
            "http://static.228.cn//upload/2012/01/10/AfterTreatment/1201101535434388-0.jpg",
          name: "上海大舞台（上海体育馆）",
          position: "徐汇区漕溪北路1111号z",
          id: "p1006"
        },
        {
          urlPic:
            "http://static.228.cn//upload/2011/09/30/AfterTreatment/xinghai1109301617307101-0.jpg",
          name: "星海音乐厅",
          position: "东山区二沙岛晴波路33号",
          id: "p1007"
        },
        {
          urlPic:
            "http://static.228.cn/upload/2014/08/03/AfterTreatment/1407046567648_m3d6-0.jpg",
          name: "广州大剧院",
          position: "天河区珠江新城华夏路",
          id: "p1008"
        },
        {
          urlPic:
            "http://static.228.cn//upload/2011/09/29/AfterTreatment/shenzhenyinyueting1109291148013535-0.jpg",
          name: "深圳音乐厅",
          position: "深圳福田区福中一路2016号",
          id: "p1009"
        },
        {
          urlPic:
            "http://static.228.cn/upload/2012/04/25/AfterTreatment/1204251541343697-0.jpg",
          name: "天津大剧院",
          position: "天津市河西区越秀路天津文化中心天津大剧院（天津乐园原址）",
          id: "p1010"
        }
      ]
    };
  }
};
</script>

<style>
/*场馆列表*/

.venue {
  width: calc(100% - 0.4rem);
  margin: 0 0.2rem;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.venue li {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 48%;
  margin-right: 2%;
  overflow: hidden;
  margin-bottom: 0.12rem;
  height: 1.8rem;
}
.mt5 {
  margin-top: 0.05rem;
}
.db {
  display: block;
}
.venue li .name {
  font-size: 0.13rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.venue .imgs {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
}
.venue-address {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.f11 {
  font-size: 0.11rem;
}
.gray9 {
  color: #999;
}
</style>