<template>
  <div class="datalist">
    <table>
      <tr>
        <th v-for="(header, index) in headers" v-bind:key="index">{{ header }}</th>
      </tr>
      <tr v-if="data.length <= 0">
        <td :colspan="headers.length">hasNoData</td>
      </tr>
      <tr v-for="(rowData, index) in data" v-bind:key="index">
        <td v-for="(colData, index2) in rowData" v-bind:key="index2">{{colData}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataListComponent",
  props: {
    headers: Array,
    data: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
table th {
  background-color: blue;
  color: white;
  border: 1px solid white;
}
table td {
  border: 1px solid;
}
.datalist {
  padding: 20px;
  text-align: left;
  width: 60%;
}
</style>