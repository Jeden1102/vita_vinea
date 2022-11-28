<template>
    <div class="home">
      <div class="card">
        <h2 class="card__heading">
          <span>Punkty</span> pola
        </h2>
        <div class="table-wrapper">
            <table id="customers">
        <tr>
            <th>Lp.</th>
            <th>Lat</th>
            <th>Lon</th>
            <th>Akcje</th>
        </tr>
        <tr v-for="(point,idx) in this.$store.state.mapPoints" :key="idx">
            <td>{{ idx }}</td>
            <td>{{ point.position.lng }}</td>
            <td>{{ point.position.lat }}</td>
            <td><button @click="removePoint(idx)" class="button button--error">Usuń</button></td>
        </tr>
        </table>
        </div>
        <button @click="addPoint" class="button button--primary">Dodaj punkt</button>
        <MapView/>
      </div>
      <div class="card">
        <h2 class="card__heading">
          <span>Dane</span> obliczeniowe
        </h2>
        <label for="">Odległość między rzędami (m)</label>
        <input type="number" v-model="spaceRow" class="base-input" placeholder="Wpisz odległość pomiędzy rzędami (m)">
        <label for="">Odległość między sadzonkami (m)</label>
        <input type="number" v-model="spacePlant" class="base-input" placeholder="Wpisz odległość pomiędzy sadzonkami (m)">
        <label for="">Odległość między słupkami środkowymi (m)</label>
        <input type="number" v-model="spacePall" class="base-input" placeholder="Wpisz odległość pomiędzy słupkami (m)">
        <button class="button button--success">Generuj wyniki</button>
      </div>
    </div>
  </template>
  
  <script>
  import MapView from '@/components/MapView.vue';
  export default {
    name: 'Home',
    components: {
      MapView
    },
    data() {
      return {
        spaceRow:'',
        spacePlant:'',
        spacePall:'',
      }
    },
    methods:{
        addPoint(){
            navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude+Math.random(0,1);
            let long = position.coords.longitude+Math.random(0,1);
            this.$store.commit('addPoint', {
                lng:long,lat:lat
            })
        });
        },
        removePoint(idx){
            this.$store.commit('removePoint',idx)
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  .card{
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding:24px;
    margin:10px;
    display:flex;
    flex-direction: column;
    gap:10px;
    &__heading{
    font-weight: 400;
      span{
        font-weight: 600;
      }
    }
  }
  .table-wrapper{
    overflow-x: scroll;

  }
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 600px;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
  </style>