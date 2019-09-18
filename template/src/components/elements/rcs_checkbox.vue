<template>
  <div class="rcs-checkbox">
    <label>
      <input class="form-control" type="checkbox" v-model="inputData" />
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "rcs_checkbox",
  props: {
    label: {
      type: String,
      required: true
    }
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
.rcs-checkbox {
  display: inline-block;
  padding: 5px;
}
.form-control {
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border-radius: 0.4rem;
}
</style>