<template>
  <div class="rcs-input">
    <label>
      {{ label }}:
      <input class="form-control" :type="type ? type : 'text'" v-model="inputData" />
    </label>
  </div>
</template>

<script>
export default {
  name: "rcs_input",
  props: {
    label: {
      type: String,
      required: true
    },
    type: String
  },
  data() {
    return {
      inputData: ""
    };
  },
  watch: {
    inputData() {
      this.$emit("input", this.inputData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  width: 71%;
  margin: 0;
  padding: var(--inputPaddingV) var(--inputPaddingH);
  color: inherit;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border-radius: 0.4rem;
}
</style>