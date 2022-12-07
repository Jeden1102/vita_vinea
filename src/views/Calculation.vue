<template>
    <div class="home">
      <div class="modal-overlay" v-if="showModal">
          <div class="modal card">
            <img @click="showModal = false" src="@/assets/close.png" alt="">
            <p>Nazwa kalkulacji</p>
            <input type="text" v-model="resultName" class="base-input" placeholder="Wpisz nazwę pod jaką zapiszesz utworzoną kalkuację">
            <button @click="generateResults" class="button button--success">Zapisz wyniki</button>
          </div>
        </div>
      <div class="card">
        <h2 class="card__heading">
          <span>Punkty</span> pola
        </h2>
        <div class="table-wrapper">
            <table id="table">
        <tr>
            <th>Lp.</th>
            <th>Lat</th>
            <th>Lon</th>
            <th>Akcje</th>
            <th>Podstawa</th>
        </tr>
        <tr v-for="(point,idx) in this.$store.state.mapPoints" :key="idx">
            <td>{{ idx }}</td>
            <td>{{ point.position.lng }}</td>
            <td>{{ point.position.lat }}</td>
            <td>
              <button @click="removePoint(idx)" class="button button--error">Usuń</button>
            </td>
            <td>
              <div class="checkbox-wrapper-31">
                <input type="checkbox" v-model="point.base" :disabled="checkBoxDisabled && !point.base"/>
                <svg viewBox="0 0 35.6 35.6">
                  <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                  <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                  <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
              </div>
            </td>
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
        <button @click="showModal = true" class="button button--success">Generuj wyniki</button>
      </div>
    </div>
  </template>
  
  <script>
  import MapView from '@/components/MapView.vue';
  import html2pdf from "html2pdf.js";
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
        showModal:false,
        resultName : '', 
      }
    },
    computed:{
      checkBoxDisabled(){
        return this.$store.state.mapPoints.filter(point=>point.base == true).length > 1;
      }
    },
    methods:{
        addPoint(){
            navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude+Math.random(0,0.0001);
            let long = position.coords.longitude+Math.random(0,0.0001);
            this.$store.commit('addPoint', {
                lng:long,lat:lat
            })
            this.$store.state.center = [lat,long]
        });
        },
        removePoint(idx){
            this.$store.commit('removePoint',idx)
        },
        generateResults(){
          let newCalculation = {
            title : this.resultName ? this.resultName : `Kalkulacja ${new Date().toLocaleDateString()} --- ${new Date().toLocaleTimeString()}`,
            id: (Math.random() + 1).toString(36).substring(7),
            points : this.$store.state.mapPoints,
            center: this.$store.state.center,
            spaceRow:this.spaceRow,
            spacePlant:this.spacePlant,
            spacePall:this.spacePall,
          }
          if(!localStorage.getItem('calculations')){
            localStorage.setItem('calculations',JSON.stringify([newCalculation]))
          }else{
            let oldCalculations = JSON.parse(localStorage.getItem('calculations'))
            oldCalculations.push(newCalculation)
            localStorage.setItem('calculations',JSON.stringify(oldCalculations))
          }
          this.$router.push({ path: '/history' })
        }
    }
  }
  </script>
  <style lang="scss" scoped>
  .home{
    position: relative;
    .modal-overlay{
      position:fixed;
      left:0;
      top:0;
      z-index:5;
      width:100%;
      height:100%;
      background: rgba(0,0,0,.5);
      backdrop-filter: blur(5px);
      display:grid;
      place-content: center;
      .modal{
        display:flex;
      flex-direction: column;
      gap:8px;
      min-width: 320px;
      img{
        width:40px;
        margin-left: auto;
        cursor: pointer;
      }
      }
    }
  }


  </style>