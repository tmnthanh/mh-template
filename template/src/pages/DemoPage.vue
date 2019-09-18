<template>
  <div class="demo-page">
    <p class="page-title">在庫照会</p>
    <div style="float: left; width: 35%;">
      <datafilter
        icon="fas fa-search"
        title="検索条件"
        :structures="getFilterStructures()"
        @submitAction="searchAction"
      />
      <datastatus icon="fas fa-toggle-on" title="プロセスモニタ" />
    </div>
    <datatable icon="fas fa-table" title="在庫管理" :data="results" :headers="headers" />
  </div>
</template>
<script>
import axios from "axios";
import datafilter from "@/components/DataFilterComponent.vue";
import datatable from "@/components/DataTableComponent.vue";
import datastatus from "@/components/DataStatusComponent.vue";

export default {
  name: "DemoPage",
  components: { datafilter, datatable, datastatus },
  data() {
    return {
      headers: [
        "location",
        "itemName",
        "inventClass",
        "lotNo",
        "rollLength",
        "rollWidth",
        "rollThickness",
        "rollWeight",
        "usage"
      ],
      filterStructure: {
        elements: [
          {
            label: "itemName",
            tlabel: this.$i18n.t("itemName"),
            type: "text",
            inputdata: ""
          },
          {
            label: "lotNo",
            tlabel: this.$i18n.t("lotNo"),
            type: "text",
            inputdata: ""
          },
          {
            label: "inventClass",
            tlabel: this.$i18n.t("inventClass"),
            type: "checkbox",
            choices: ["inventClass1", "inventClass2", "inventClass3"],
            tchoices: [
              this.$i18n.t("inventClass1"),
              this.$i18n.t("inventClass2"),
              this.$i18n.t("inventClass3")
            ],
            inputdata: ""
          },
          {
            label: "weight",
            tlabel: this.$i18n.t("weight"),
            type: "text",
            inputdata: ""
          },
          {
            label: "coreNo",
            tlabel: this.$i18n.t("coreNo"),
            type: "text",
            inputdata: ""
          },
          {
            label: "search",
            tlabel: this.$i18n.t("search"),
            type: "button",
            action: "submitAction"
          }
        ]
      },
      results: []
    };
  },
  methods: {
    searchAction() {
      var requestURL = "http://localhost:3004/demo";
      var queryStr = [];
      this.filterStructure.elements.forEach(element => {
        if (element.type == "checkbox") {
          element.options.forEach(option => {
            if (option.value) {
              queryStr.push(element.label + "=" + option.ID);
            }
          });
        } else if (element.type != "button" && element.inputdata) {
          queryStr.push(element.label + "=" + element.inputdata);
        }
      });

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
          var elObj = responseData.data[i];
          var elRow = [
            elObj.location,
            elObj.itemName,
            elObj.inventClassS,
            elObj.lotNo,
            elObj.rollLength,
            elObj.rollWidth,
            elObj.rollThickness,
            elObj.weight,
            elObj.usage
          ];
          this.results.push(elRow);
        }
      }
    },
    getFilterStructures() {
      this.filterStructure.elements.forEach(element => {
        element.tlabel = this.$i18n.t(element.label);
      });
      return this.filterStructure;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-title {
  padding: 5px 5px 5px 10px;
  margin: 0;
  background-color: black;
  color: white;
}
.demo-page {
  background-color: #efefef;
}
.datafilter,
.datastatus {
  width: 100%;
}
.datastatus {
  margin-top: 20px;
}
.datatable {
  padding-left: 15px;
  width: 60%;
}
</style>
