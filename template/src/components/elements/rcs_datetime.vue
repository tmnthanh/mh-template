<template>
  <div class="rcs-datetime">
    <label>
      {{ label }}:
      <datepicker
        v-model="inputData"
        :placeholder="$t(label)"
        :format="format"
        input-class="rcs-datepicker"
        :minimumView="minimumView"
        :maximumView="maximumView"
        :initialView="initialView"
      ></datepicker>
    </label>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "rcs_datetime",
  components: {
    Datepicker
  },
  props: {
    label: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    initialView: {
      type: String,
      default: "day"
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
      inputData: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vdp-datepicker {
  display: inline;
}
.vdp-datepicker > div {
  display: inline;
}
.rcs-datepicker {
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