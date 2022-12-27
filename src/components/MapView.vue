<template>
    <div>
      <span style="display:none">{{ computeSurface }}</span>
      <l-map
        :zoom="zoom"
        :center="this.$store.state.center"
        style="height: 700px; width: 100%"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-polyline
          :lat-lngs="points"
          :color="polyline.color"
        />
        <l-polyline
          :lat-lngs="baseLinePoints"
          color="red"
        />
        <l-marker
            v-for="(marker,idx) in this.$store.state.mapPoints"
            :key="idx"
            :draggable="true"
            :lat-lng.sync="marker.position"
            @click="alert(marker)"
            >
            <l-tooltip :options="{ permanent: true, interactive: true }">
            <span class="point-tooltip"><b>{{ idx }}</b> </span>
           <span v-if="(idx>0)">{{ distanceBetweenPoints[idx-1] }}m do pkt {{ idx-1 }}</span>
           <span v-else-if="(idx==0) && points.length>2"> {{ distanceBetweenPoints[distanceBetweenPoints.length-1] }}m do pkt {{ points.length-2 }}</span>
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
  import { computeArea ,LatLng} from 'spherical-geometry-js/src/index';
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
      LTooltip
    },
    computed:{
        points(){
            let arr = [];
            this.$store.state.mapPoints.forEach((el=>{
                arr.push([el.position.lat,el.position.lng])
            }))
            if(this.$store.state.mapPoints.length>1){
              const firstPoint = this.$store.state.mapPoints[0].position
            arr.push([firstPoint.lat,firstPoint.lng])
            }
            return arr
        },
        baseLinePoints(){
          const points = this.$store.state.mapPoints.filter(el=>el.base === true);
          let arr = [];
          points.forEach(el => {
            arr.push([el.position.lat,el.position.lng])
          });

          return arr;
        },
        distanceBetweenPoints(){
          let points = [];
          if(this.$store.state.mapPoints.length>2){
            points = [...this.$store.state.mapPoints,this.$store.state.mapPoints[0]];
          }else{
            points = this.$store.state.mapPoints
          }
          this.$store.state.results.circuit = 0;
          if(points.length>1){
            let arr = [];
          points.forEach((point,i)=>{
            if(points[i-1]){
              const lat1 = points[i].position.lat;
              const lat2 = points[i-1].position.lat;
              const lon1 = points[i].position.lng;
              const lon2 = points[i-1].position.lng;
              const R = 6371e3; // metres
              const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
              const φ2 = (lat2 * Math.PI) / 180;
              const Δφ = ((lat2 - lat1) * Math.PI) / 180;
              const Δλ = ((lon2 - lon1) * Math.PI) / 180;

              const a =
                Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
              const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

              const d = R * c;
              arr.push(Math.floor(d))
              this.$store.state.results.circuit += Math.floor(d);
            }

          })
          return arr;
          }

        },
        computeSurface(){
          let points = [];
          if(this.$store.state.mapPoints.length>2){
            points = [...this.$store.state.mapPoints,this.$store.state.mapPoints[0]];
          }else{
            points = this.$store.state.mapPoints
          }
               //convert coords to latlng
     var latLngs = points.map(function(coord) { 
        return new LatLng(coord.position.lat, coord.position.lng);
     });
     this.$store.state.results.surface = Math.floor(computeArea(latLngs))
     console.log(this.$store.state.results.surface)
     return computeArea(latLngs)
        },
        zoom(){
          return 15
        }
    },
    data() {
      return {
        circuit:0,
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
    mounted(){
      this.getMyPosition()
    },
    methods: {
      clickBtn() {
        this.rectangle.style.weight++;
        this.rectangle.style.color =
          this.rectangle.style.weight % 2 === 0 ? "blue" : "green";
      },
      test(e){
        console.log(e)
      },
      getMyPosition(){
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            this.$store.state.center = [lat,long]
        });
      }
    }
  };
  </script>
  <style lang="scss">
.leaflet-tooltip{
  .point-tooltip{
    display:block;
    width:fit-content;
    background:#04AA6D;
    padding:5px;
    width:20px;
    height:20px;
    display:grid;
    place-content: center;
    border-radius: 50%;
  }
}
</style>