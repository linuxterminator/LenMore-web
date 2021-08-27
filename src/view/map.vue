<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  data:function(){
    return{
      map:null,
      AMap:null,
    }
  },
  methods:{
    mapInit:async function(){
        this.AMap = await AMapLoader.load({
            "key": "6c19f6bbfd4bcf655797499d0fe09a42",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            },
        })
        this.map = new this.AMap.Map('container',{
          zoom:14   //设置镜头远近，缩放
        });
        // this.map.on('click',(ev)=>{
        //     console.log(ev.lnglat)
        //     this.addTag(ev.lnglat)
        // })
        this.addTag()
        this.map.panTo([121.840085,31.457446])
    },
    // 添加标记点，可以使用axios获取地理坐标，这里使用的是上面点击事件中的位置，
    // 每点击一个地点就创建一个坐标，
    addTag:function(){

      let config = {
          center: new this.AMap.LngLat(121.840085,31.457446), // 圆心位置
          radius: 100,  //半径
          strokeColor: "#F33",  //线颜色
          strokeOpacity: 1,  //线透明度
          strokeWeight: 3,  //线粗细度
          fillColor: "#ee2200",  //填充颜色
          fillOpacity: 0.35 //填充透明度
      }

      let circle = new this.AMap.Circle(config);
      this.map.add(circle)
    }
  },
  created:function(){
    this.mapInit();
  }
}
</script>

<style>
#container{
  height:100%;
  width:100%;
}
</style>