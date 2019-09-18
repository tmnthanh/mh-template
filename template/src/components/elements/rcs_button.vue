<template>
  <div class="rcs-button">
    <a href="javascript:;" v-on:click="actionMethod" :class="btnClass">{{ label }}</a>
  </div>
</template>

<script>
export default {
  name: "rcs_button",
  props: {
    label: {
      type: String,
      required: true
    },
    btnClass: String
  },
  methods: {
    actionMethod() {
      this.$emit("action");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit {
  -moz-box-shadow: 0px 1px 0px 0px #f0f7fa;
  -webkit-box-shadow: 0px 1px 0px 0px #f0f7fa;
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #33bdef),
    color-stop(1, #019ad2)
  );
  background: -moz-linear-gradient(top, #33bdef 5%, #019ad2 100%);
  background: -webkit-linear-gradient(top, #33bdef 5%, #019ad2 100%);
  background: -o-linear-gradient(top, #33bdef 5%, #019ad2 100%);
  background: -ms-linear-gradient(top, #33bdef 5%, #019ad2 100%);
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#33bdef', endColorstr='#019ad2',GradientType=0);
  background-color: #33bdef;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
}
.submit:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #019ad2),
    color-stop(1, #33bdef)
  );
  background: -moz-linear-gradient(top, #019ad2 5%, #33bdef 100%);
  background: -webkit-linear-gradient(top, #019ad2 5%, #33bdef 100%);
  background: -o-linear-gradient(top, #019ad2 5%, #33bdef 100%);
  background: -ms-linear-gradient(top, #019ad2 5%, #33bdef 100%);
  background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#019ad2', endColorstr='#33bdef',GradientType=0);
  background-color: #019ad2;
}
.submit:active {
  position: relative;
  top: 1px;
}

.reset {
  -moz-box-shadow: 0px 1px 0px 0px #fff6af;
  -webkit-box-shadow: 0px 1px 0px 0px #fff6af;
  box-shadow: 0px 1px 0px 0px #fff6af;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #e8d243),
    color-stop(1, #ffab23)
  );
  background: -moz-linear-gradient(top, #e8d243 5%, #ffab23 100%);
  background: -webkit-linear-gradient(top, #e8d243 5%, #ffab23 100%);
  background: -o-linear-gradient(top, #e8d243 5%, #ffab23 100%);
  background: -ms-linear-gradient(top, #e8d243 5%, #ffab23 100%);
  background: linear-gradient(to bottom, #e8d243 5%, #ffab23 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8d243', endColorstr='#ffab23',GradientType=0);
  background-color: #e8d243;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #f0dd4f;
}
.reset:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ffab23),
    color-stop(1, #e8d243)
  );
  background: -moz-linear-gradient(top, #ffab23 5%, #e8d243 100%);
  background: -webkit-linear-gradient(top, #ffab23 5%, #e8d243 100%);
  background: -o-linear-gradient(top, #ffab23 5%, #e8d243 100%);
  background: -ms-linear-gradient(top, #ffab23 5%, #e8d243 100%);
  background: linear-gradient(to bottom, #ffab23 5%, #e8d243 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffab23', endColorstr='#e8d243',GradientType=0);
  background-color: #ffab23;
}
.reset:active {
  position: relative;
  top: 1px;
}
</style>