<template>
  <div>
    <div class="card">
      <h2 class="card__heading">
       <span>Lista</span> kalkulacji 
      </h2>
        <div class="table-wrapper">
          <table id="table">
        <tr>
            <th>id</th>
            <th>Nazwa</th>
            <th>Akcje</th>
        </tr>
        <tr v-for="calculation in calculationsHistory" :key="calculation.id">
            <td>{{ calculation.id }}</td>
            <td>{{ calculation.title }}</td>
            <td class="calc-buttons">
              
              <router-link :to="{ name: 'calculation', params: { id: calculation.id }}">
                <button class="button button--primary">Podgląd</button>
              </router-link>
              <button @click="deleteResult(calculation.id)" class="button button--error">Usuń</button>
            </td>
        </tr>
        </table>
        </div>
        <button  @click="removeAllResults" class="button button--error">Usuń wszystkie kalkulacje</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        calculationsHistory :JSON.parse(localStorage.getItem('calculations')),
      }
    },
    methods: {
      deleteResult(id){
        console.log(this.calculationsHistory)
        let results = JSON.parse(localStorage.getItem('calculations'));
        results = results.filter(res=>res.id != id)
        localStorage.removeItem('calculations');
        localStorage.setItem('calculations',JSON.stringify(results))
        this.calculationsHistory = results;
      },
      removeAllResults(){
        if (confirm("Czy na pewno chcesz usunąć wsystkie kalkulacje?") == true) {
        localStorage.removeItem('calculations');
        this.calculationsHistory = [];
        }
      }
    },
  }
  /*
  2. generuj zapisuje w local to niżej i przenosi kalkulacja/xyz :
xyz losowe i tam


"generuj "pdf"

zapisz zapisuje do local storage

- tytuł
- points [id,lon,lat,podstawa]
- miedzy rzedamie
- miedzy sadzonami
- miedzy skuplaki

3. na to niżej patrzymyczy jest item w local storaeg o takim id
4. kaluacje to lista gidze można usunać/przejść/pobrać kalkulacje - edycja może kiedys
*/
</script>

<style lang="scss" scoped>
.calc-buttons{
  display:flex;
  gap:12px;
}
</style>
