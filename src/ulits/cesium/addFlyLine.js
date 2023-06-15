import * as Cesium from "cesium";
import {PolylineTrailMaterialProperty} from '../cesium/PolylineTrailMaterialProperty'
export function generateCurve(startPoint, endPoint) {
  console.log(startPoint, endPoint);
  let addPointCartesian = new Cesium.Cartesian3();
  Cesium.Cartesian3.add(startPoint, endPoint, addPointCartesian);
  let midPointCartesian = new Cesium.Cartesian3();
  Cesium.Cartesian3.divideByScalar(addPointCartesian, 2, midPointCartesian);
  let midPointCartographic =
    Cesium.Cartographic.fromCartesian(midPointCartesian);
  //除以的这个数越小 开始的位置聚集的位置就越陡，越大 开始的位置线就越平缓，
  midPointCartographic.height =
    Cesium.Cartesian3.distance(startPoint, endPoint) / 10;
  let midPoint = new Cesium.Cartesian3();
  Cesium.Ellipsoid.WGS84.cartographicToCartesian(
    midPointCartographic,
    midPoint
  );
  let spline = new Cesium.CatmullRomSpline({
    times: [0.0, 0.5, 1.0],
    points: [startPoint, midPoint, endPoint],
  });
  let curvePointsArr = [];
  for (let i = 0, len = 300; i < len; i++) {
    curvePointsArr.push(spline.evaluate(i / len));
  }
  //let curLinePointsArr = generateCurve(startPt, endPt);
  //构造实体动线的配置
  window.viewer.entities.add({
    description: "飞天动态轨迹线",
    show: true,
    polyline: {
      width: 3,
      positions: curvePointsArr,
      material: new Cesium.PolylineTrailMaterialProperty({
        // 尾迹线材质
        //指定线型的填充颜色，替换为白色。
        color: new Cesium.Color.fromCssColorString("rgba(70,130,180, 1.0)"),
        //指定轮廓线的颜色，可选的黑色。
        outlineColor: new Cesium.Color(70 / 255, 130 / 255, 180 / 255, 0.3),
        //设置尾迹线的长度在整条线中占的比例，替换数值0.3
        trailLength: 0.8,
        constantSpeed: 10,
        //数值属性，设置尾迹线从起点到终点的运行周期，单位是秒，每次转换1000.0。
        period: 3,
      }),
    },
  });
}
