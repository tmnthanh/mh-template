<template>
  <div class="rcs-select">
    <label>
      {{ label }}:
      <select class="form-control" v-model="inputData">
        <option disabled value>{{ requestSelect }}</option>
        <option v-for="item in optionChoise" v-bind:key="item" v-bind:value="item">{{item}}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "rcs_select",
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: String,
      required: true
    },
    requestSelect: {
      type: String,
      default: "Please select one."
    },
    value: String
  },
  watch: {
    inputData() {
      this.$emit("input", this.inputData);
    }
  },
  data() {
    return {
      inputData: "",
      optionChoise: []
    };
  },
  beforeMount() {
    if (this.options) {
      this.optionChoise = this.options.split(";");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>