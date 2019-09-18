<template>
  <div class="data-filer-page">
    <p class="page-title">在庫照会</p>
    <lookupdata class="lookupform" @action="searchAction" />
    <datatable fields="id, name," :data="results" :headers="headers" />
  </div>
</template>

<script>
import axios from "axios";
import lookupdata from "@/components/LookUpComponent.vue";
import datatable from "@/components/DataListComponent.vue";
export default {
  name: "DataFilterPage",
  components: {
    lookupdata,
    datatable
  },
  data() {
    return {
      headers: ["name", "phone", "gender", "birthday", "province"],
      results: [],
      info: {}
    };
  },
  methods: {
    searchAction(searchCondition) {
      var requestURL = "http://localhost:3004/people";
      var queryStr = [];
      if (searchCondition.name) {
        queryStr.push("name=" + searchCondition.name);
      }
      if (searchCondition.phone) {
        queryStr.push("phone=" + searchCondition.phone);
      }
      if (searchCondition.gender) {
        queryStr.push("gender=" + searchCondition.gender);
      }
      if (searchCondition.birthday) {
        queryStr.push("birthday=" + searchCondition.birthday);
      }
      if (searchCondition.province) {
        queryStr.push("province=" + searchCondition.province);
      }
      if (queryStr.length > 0) {
        requestURL += "?" + queryStr.join("&");
      }
      axios
        .get(requestURL, { useCredentails: true })
        .then(response => this.processResults(response));
    },
    processResults(responseData) {
      if (responseData && responseData.data) {
        this.results = [];
        for (var i = 0; i < responseData.data.length; i++) {
          var user = responseData.data[i];
          var userRow = [
            user.name,
            user.gender,
            user.phone,
            user.birthday,
            user.province
          ];
          this.results.push(userRow);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lookupform {
  padding: 20px;
  text-align: left;
  width: 60%;
}
.page-title {
  padding: 5px 5px 5px 10px;
  margin: 0;
  background-color: black;
  color: white;
}
</style>
