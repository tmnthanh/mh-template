<template>
  <div class="datatable">
    <div class="title">
      <i v-bind:class="icon"></i>
      {{title}}
    </div>
    <table class="tablelist">
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
  name: "DataTableComponent",
  props: {
    icon: String,
    title: String,
    headers: Array,
    data: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datatable {
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
}
.title {
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
}
.tablelist {
  width: 100%;
  background-color: white;
}
td {
  padding: 5px;
  text-align: center;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
i {
  padding: 5px;
}
</style>
