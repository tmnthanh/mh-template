<template>
  <div class="lookupcomponent">
    <table class="lookuptable">
      <tr>
        <td colspan="2">
          <RCSInput label="name" type="text" v-model="searchCondition.name" />
        </td>
      </tr>
      <tr>
        <td>
          <RCSInput label="phone" type="phone" v-model="searchCondition.phone" />
        </td>
        <td>
          <RCSRadio label="gender" options="male;female;all" v-model="searchCondition.gender" />
        </td>
      </tr>
      <tr>
        <td>
          <RCSDatetime
            v-model="searchCondition.birthday"
            label="birthday"
            format="yyyy"
            minimumView="year"
            maximumView="year"
            initialView="year"
          />
        </td>
      </tr>
      <tr>
        <td>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <RCSButton
            label="search"
            btnClass="submit"
            style="float: right;"
            @action="lookupSearchAction"
          />
          <RCSButton
            label="reset"
            btnClass="reset"
            style="float: right; padding-right: 5px;"
            @action="resetFormAction"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import RCSInput from "@/components/elements/rcs_input.vue";
import RCSButton from "@/components/elements/rcs_button.vue";
import RCSRadio from "@/components/elements/rcs_radio.vue";
import RCSDatetime from "@/components/elements/rcs_datetime.vue";

export default {
  name: "LookUpComponent",
  components: {
    RCSInput,
    RCSButton,
    RCSRadio,
    RCSDatetime
  },
  data() {
    return {
      searchCondition: {
        name: "",
        phone: "",
        gender: "",
        birthday: "",
        province: ""
      },
      provinceDatas: [
        {
          name: "Florida"
        },
        {
          name: "Texas"
        },
        {
          name: "San Francisco"
        }
      ]
    };
  },
  methods: {
    resetFormAction() {
      alert("Not Implemented.");
    },
    lookupSearchAction() {
      if (this.searchCondition.gender == "all") {
        this.searchCondition.gender = "";
      }
      this.$emit("action", this.searchCondition);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lookuptable {
  width: 100%;
  background-color: #efefef;
}
td {
  padding: 5px;
}
</style>
