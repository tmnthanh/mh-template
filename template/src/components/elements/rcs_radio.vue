<template>
  <div class="rcs-radio">
    <label>
      {{ label }}:
      <label v-for="item in optionChoise" v-bind:key="item">
        <input class="form-control" type="radio" v-model="inputData" v-bind:value="item" />
        {{ item }}
      </label>
    </label>
  </div>
</template>

<script>
export default {
  name: "rcs_radio",
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: String,
      required: true
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