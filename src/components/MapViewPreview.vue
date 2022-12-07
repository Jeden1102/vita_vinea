<template>
    <div>
      <l-map
        :zoom="zoom"
        :center="center"
        style="height: 700px; width: 100%"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-polyline
          :lat-lngs="pointsForPolyline"
          :color="polyline.color"
        />
        <l-polyline
          :lat-lngs="baseLinePoints"
          color="red"
        />
        <l-marker
            v-for="(marker,idx) in this.points"
            :key="idx"
            :draggable="false"
            >
            <l-tooltip :options="{ permanent: true, interactive: true }">
            Punkt {{ idx }}
        </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </template>
  
  <script>
  import {
    LMap,
    LTileLayer,
    LCircle,
    LRectangle,
    LPolygon,
    LPolyline,
    LMarker,
    LTooltip
  } from "vue2-leaflet";
  
  import { Icon } from 'leaflet';
  import VueHtml2pdf from 'vue-html2pdf'
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
  export default {
    name: "GeometryTest",
    components: {
      LMap,
      LTileLayer,
      LCircle,
      LRectangle,
      LPolygon,
      LPolyline,
      LMarker,
      LTooltip,
      VueHtml2pdf
    },
    props:['points','center'],
    computed:{
        pointsForPolyline(){
            let arr = [];
            this.points.forEach((el=>{
                arr.push([el.position.lat,el.position.lng])
            }))
            return arr
        },
        baseLinePoints(){
          const points = this.points.filter(el=>el.base === true);
          let arr = [];
          points.forEach(el => {
            arr.push([el.position.lat,el.position.lng])
          });
          return arr;
        },
        zoom(){
          return 10
        }
    },
    data() {
      return {
        polyline: {
          latlngs: [
            [47.334852, -1.509485],
            [47.342596, -1.328731],
            [47.241487, -1.190568],
            [47.234787, -1.358337]
          ],
          color: "green"
        },
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      };
    },
  };
  </script>