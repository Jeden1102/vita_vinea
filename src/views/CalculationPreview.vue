<template>
    <div class="home">
    <vue-html2pdf
    :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        :filename="result.title"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="100%"
        ref="html2Pdf"
    >
    <section slot="pdf-content">

      <div class="card">
        <h2>Podgląd kalkulacji</h2>
        <h2 class="card__heading">
          <span>Kalkulacja</span> {{ result.title }}
        </h2>
        <div class="table-wrapper">
            <table id="table">
        <tr>
            <th>Lp.</th>
            <th>Lat</th>
            <th>Lon</th>
            <th>Podstawa</th>
        </tr>
        <tr v-for="(point,idx) in result.points" :key="idx">
            <td>{{ idx }}</td>
            <td>{{ point.position.lng }}</td>
            <td>{{ point.position.lat }}</td>
            <td>
              <div class="checkbox-wrapper-31">
                <input type="checkbox" v-model="point.base" disabled="true"/>
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
        <MapViewPreview :center="result.center" :points="result.points"/>
      </div>
      <div class="card">

        <h2 class="card__heading">
          <span>Wprowadzone dane</span> obliczeniowe
        </h2>
        <div class="table-wrapper">
            <table id="table">
        <tr>
            <th>Dane</th>
            <th>Wartość</th>
        </tr>
        <tr>
            <td>Odległość między rzędami (m)</td>
            <td>{{ result.spaceRow }}</td>
        </tr>
        <tr>
            <td>Odległość między sadzonkami (m)</td>
            <td>{{ result.spacePlant }}</td>
        </tr>
        <tr>
            <td>Odległość między  słupkami środkowym (m)</td>
            <td>{{ result.spacePall }}</td>
        </tr>
        </table>
      </div>
      <button @click="generateReport" class="button button--primary">Generuj PDF</button>

    </div>
</section>

</vue-html2pdf>
    </div>
  </template>
  
  <script>
  import MapViewPreview from '@/components/MapViewPreview.vue';
  import VueHtml2pdf from 'vue-html2pdf'
  export default {
    name: 'Home',
    props:['id'],
    components: {
      MapViewPreview,
      VueHtml2pdf
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
      result(){
        let results = JSON.parse(localStorage.getItem('calculations'))
        return results.filter(results=>results.id == this.id)[0];
      }
    },
    methods:{
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
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