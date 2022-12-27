<template>
    <div>
        <div class="table-wrapper">
        <table id="table">
        <tr>
            <th>Dane</th>
            <th>Wartość</th>
        </tr>
        <tr>
            <td>Obwód</td>
            <td>{{ this.$store.state.results.circuit }} m</td>
        </tr>
        <tr>
            <td>Powierzchnia</td>
            <td>{{ this.$store.state.results.surface }} m2</td>
        </tr>
        <tr>
            <td>Ilość rzędów</td>
            <td>{{ this.$store.getters.getRowNumber }}</td>
        </tr>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        computed(){
            
        }
    }
</script>

<style lang="scss" scoped>

</style>