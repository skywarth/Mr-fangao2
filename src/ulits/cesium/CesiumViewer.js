/*
 * @Author: liqifeng
 * @Date: 2022-12-05 16:46:03
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2022-12-20 14:10:09
 * @Description: 
 */
import * as Cesium from "cesium";
export function CesiumViewer(containerId = "cesiumContainer", mode) {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyNThiOTQ5Yi04OTkzLTQzZWUtOTJlMC01OTQxNGU0YzMxZWIiLCJpZCI6NzY2OCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1NDE2OTI3Nn0.5Q_q6jBgYzvO_EKF8V8ypFOkwEc92rLSb9weyeTKoBg";
  let options = {
    orderIndependentTranslucency: false,
    contextOptions: {
      webgl: {
        alpha: true,
        reserveDrawingBuffer: true,
        useDefaultRenderLoop: false,
      },
    },
    // skyAtmosphere: false,
    selectionIndicator: false,
    animation: false, //是否显示动画控件
    baseLayerPicker: false, //是否显示图层选择控件
    geocoder: false, //是否显示地名查找控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: false, //模式切换
    navigationHelpButton: false, //是否显示帮助信息控件
    infoBox: false, //是否显示点击要素之后显示的信息imageryProvider
    fullscreenButton: false, //全屏
    homeButton: false, //主页,
    shouldAnimate: true,
    terrainProvider: Cesium.createWorldTerrain({
      requestVertexNormals: true,
      requestWaterMask: true,
    }),
    shadows: true,
    // sceneMode: mode == "2d" ? Cesium.defined.SCENE2D : Cesium.defined.SCENE3D,
  };
  let viewer = new Cesium.Viewer(containerId, options);
  //添加底图
  viewer.layers = [];
  // viewer.getInstance(() => {
  //   if (viewer) {
  //     return viewer;
  //   } else {
  //     return (viewer = new Cesium.Viewer(containerId, options));
  //   }
  // });
  // 列表复制
  Array.prototype.clone = function () {
    return JSON.parse(JSON.stringify(this));
  };
  viewer.scene.skyBox.show = true;
  viewer._cesiumWidget._creditContainer.style.display = "none"; //取消版权信息
  viewer.scene.globe.depthTestAgainstTerrain = true;
  //去除默认双击事件
  viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );
  //设置鼠标中键
  viewer.scene.screenSpaceCameraController.zoomEventTypes = [
    Cesium.CameraEventType.WHEEL,
    Cesium.CameraEventType.PINCH,
  ];
  viewer.scene.screenSpaceCameraController.tiltEventTypes = [
    Cesium.CameraEventType.PINCH,
    Cesium.CameraEventType.RIGHT_DRAG,
  ];
  //开启抗锯齿
  if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
    //判断是否支持图像渲染像素化处理
    viewer.resolutionScale = window.devicePixelRatio;
  }
  viewer.scene.fxaa = true;
  viewer.scene.postProcessStages.fxaa.enabled = true;
  viewer.scene.globe.baseColor = new Cesium.Color(0, 0, 0, 0);

  window.viewer = viewer;
  window.viewer.tilesets = [];
  return viewer;
}

export function getOsmMap() {
  window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
  let imagery = window.viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: "https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      subdomains: ["a", "b", "c", "d"],
    })
  );
}
export function getAutonavi() {
  window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
  let imagery = window.viewer.imageryLayers.addImageryProvider(
    new Cesium.UrlTemplateImageryProvider({
      url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
      minimumLevel: 3,
      maximumLevel: 18,
    })
  );
  let atLayer = new Cesium.UrlTemplateImageryProvider({
    url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    minimumLevel: 3,
    maximumLevel: 18,
  });
  viewer.imageryLayers.addImageryProvider(atLayer);
}
export function getArcgismap() {
  window.viewer.imageryLayers.remove(window.viewer.imageryLayers.get(0));
  let provider = new Cesium.ArcGisMapServerImageryProvider({
		url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
		tilingScheme: new Cesium.WebMercatorTilingScheme(),
	});
  window.viewer.imageryLayers.addImageryProvider(provider);
}



export function zoomByLoc() {}
/**
 * @Author: dongnan
 * @Description: 开发调试
 * @Date: 2021-08-01 13:02:09
 * @param {*} viewer
 */
function debugView(viewer) {
	let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
	handler.setInputAction(function (movement) {
		let pickedFeature = viewer.scene.pick(movement.endPosition);
		if (
			Cesium.defined(pickedFeature) &&
			Cesium.defined(pickedFeature.collection) &&
			Cesium.defined(pickedFeature.collection.Type) &&
			pickedFeature.collection.Type == "PrimitivePoints"
		) {
			viewer._container.style.cursor = "pointer";
		} else {
			viewer._container.style.cursor = "default";
		}
	}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
	viewer.camera.percentageChanged = 0.001;
	viewer.camera.changed.addEventListener(function (moveEndPosition) {
		let ellipsoid = viewer.scene.globe.ellipsoid;
		let cartesian3 = viewer.camera.position;
		let cartograhphic = ellipsoid.cartesianToCartographic(cartesian3);
		let lat = Cesium.Math.toDegrees(cartograhphic.latitude);
		let lng = Cesium.Math.toDegrees(cartograhphic.longitude);
		let alt = cartograhphic.height;
		console.log("位置:" + cartesian3);
		console.log("相机高度:" + alt);
		console.log("heading:", viewer.camera.heading + "," + "pitch:" + viewer.camera.pitch + "," + "roll:" + viewer.camera.roll);
	});
}

/**
 * @Author: dongnan
 * @Description: 获取视域范围
 * @Date: 2022-01-04 10:31:27
 * @param {*} viewer
 */
function getExtent(viewer) {
  let rectangle = viewer.camera.computeViewRectangle();
  let extent = [
    Cesium.Math.toDegrees(rectangle.west),
    Cesium.Math.toDegrees(rectangle.south),
    Cesium.Math.toDegrees(rectangle.east),
    Cesium.Math.toDegrees(rectangle.north),
  ];
  return extent;
}

function getResolution(viewer) {
  let scene = viewer.scene;
  // 获取画布的大小
  let width = scene.canvas.clientWidth;
  let height = scene.canvas.clientHeight;
  //获取画布中心两个像素的坐标（默认地图渲染在画布中心位置）
  let left = scene.camera.getPickRay(
    new Cartesian2((width / 2) | 0, (height - 1) / 2)
  );
  let right = scene.camera.getPickRay(
    new Cartesian2((1 + width / 2) | 0, (height - 1) / 2)
  );
  let globe = scene.globe;
  let leftPosition = globe.pick(left, scene);
  let rightPosition = globe.pick(right, scene);
  if (!Cesium.defined(leftPosition) || !Cesium.defined(rightPosition)) {
    return;
  }
  let leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition);
  let rightCartographic =
    globe.ellipsoid.cartesianToCartographic(rightPosition);
  let geodesic = new Cesium.EllipsoidGeodesic();
  geodesic.setEndPoints(leftCartographic, rightCartographic);
  let distance = geodesic.surfaceDistance / 1000; //分辨率
  return distance;
}

/**
 * @Author: dongnan
 * @Description: 经纬度转米(EPSG:4326)
 * @Date: 2022-01-04 13:54:05
 * @param {*} degree
 */
function degreeToMeter(degree) {
  let meter = (degree / 360) * (2 * Math.PI * 6371004);
  return meter;
}
