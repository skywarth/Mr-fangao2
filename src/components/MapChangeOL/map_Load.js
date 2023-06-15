// import { XYZ } from "ol/source";
// import TileLayer from "ol/layer/Tile";

const tilelayers = [
  {
    id: "tileSatellite",
    title: "卫星图影像",
    layerName: "baseMap",
    url: "http://t0.tianditu.com/DataServer?T=img_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",

    img_url: new URL("./img/tianditu_img.png", import.meta.url).href,
  },
  {
    id: "tileLayer",
    title: "天地图",
    layerName: "baseMap",
    url: "http://t0.tianditu.com/DataServer?T=vec_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
    img_url: new URL("./img/tianditu_vec.png", import.meta.url).href,
  },
  {
    id: "map_ter",
    title: "天地图地形",
    layerName: "baseMap",
    img_url: new URL("./img/tianditu_ter.png", import.meta.url).href,
    url: "http://t0.tianditu.com/DataServer?T=ter_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
  },
  {
    id: "dark_map",
    title: "暗黑色底图",
    layerName: "baseMap",
    img_url: new URL("./img/tianditu_ter.png", import.meta.url).href,
    url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
  },
  {
    id: "color_map",
    title: "彩色注记底图",
    layerName: "baseMap",
    img_url: new URL("./img/tianditu_ter.png", import.meta.url).href,
    url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
  },
  {
    id: "warm_map",
    title: "暖色底图",
    layerName: "baseMap",
    img_url: new URL("./img/tianditu_ter.png", import.meta.url).href,
    url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
  },
  {
    id: "map",
    title: "暖色底图",
    layerName: "baseMap",
    img_url: new URL("./img/tianditu_ter.png", import.meta.url).href,
    url: "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
  },
];
export default tilelayers;
export function tianditu() {
  // T=vec_c表示请求的是路网数据，x 表示切片的 x 轴坐标，y 表示切片的y轴坐标，z表示切片所在的缩放级别。
  // 使用 ol.source.XYZ 加载切片，并将获取的数据初始化一个切片图层 ol.layer.Tile：
  //天地图底图
  var source = new XYZ({
    url: "http://t4.tianditu.com/DataServer?T=vec_w&tk=申请的天地图key&x={x}&y={y}&l={z}",
  });
  var tileLayer = new TileLayer({
    id: "tileLayer",
    title: "天地图",
    layerName: "baseMap",
    source: source,
  });
  //标注图层
  var sourceMark = new XYZ({
    url: "http://t3.tianditu.com/DataServer?T=cva_w&tk=申请的天地图key&x={x}&y={y}&l={z}",
  });
  var tileMark = new TileLayer({
    id: "tileMark",
    title: "标注图层",
    layerName: "baseMap",
    source: sourceMark,
  });
  //卫星图像
  var sourceSatellite = new XYZ({
    url: "http://t3.tianditu.com/DataServer?T=img_w&tk=申请的天地图key&x={x}&y={y}&l={z}",
  });
  var tileSatellite = new TileLayer({
    id: "tileSatellite",
    title: "卫星图",
    layerName: "baseMap",
    source: sourceSatellite,
  });
  //天地图地形地图
  var map_ter = new TileLayer({
    id: "map_ter",
    title: "天地图地形",
    layerName: "baseMap",
    source: new XYZ({
      url: "http://t4.tianditu.com/DataServer?T=ter_w&tk=63eb152cd7f93f6aa703c3c5f25032a4&x={x}&y={y}&l={z}",
    }),
  });
  var map_cta = new TileLayer({
    id: "map_cta",
    title: "天地图标注",
    layerName: "baseMap",
    source: new XYZ({
      url: "http://t4.tianditu.com/DataServer?T=cva_w&tk=申请的天地图key&x={x}&y={y}&l={z}",
    }),
  });

  return {
    tileLayer: tileLayer,
    tileMark: tileMark,
    tileSatellite: tileSatellite,
    map_ter: map_ter,
    map_cta: map_cta,
  };
}
