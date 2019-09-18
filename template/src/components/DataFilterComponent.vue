<template>
  <div class="datafilter">
    <div class="title">
      <i v-bind:class="icon"></i>
      {{title}}
    </div>
    <table class="lookuptable">
      <tr v-for="element in structures.elements" v-bind:key="element._id">
        <!-- type text -->
        <td v-if="element.type == 'text'">
          <RCSInput :label="element.tlabel" type="text" v-model="element.inputdata" />
        </td>
        <!-- type checkbox -->
        <td v-if="element.type == 'checkbox'">
          {{ element.tlabel }}:
          <RCSCheckbox
            v-for="choice in element.options"
            v-bind:key="choice.ID"
            :label="choice.label"
            v-model="choice.value"
          />
        </td>
        <!-- type button -->
        <td v-if="element.type == 'button'">
          <RCSButton
            :label="element.tlabel"
            btnClass="submit"
            style="float: right;"
            @action="buttonAction(element.action)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import RCSInput from "@/components/elements/rcs_input.vue";
import RCSButton from "@/components/elements/rcs_button.vue";
import RCSCheckbox from "@/components/elements/rcs_checkbox.vue";

export default {
  name: "DataFilterComponent",
  props: {
    title: String,
    icon: String,
    structures: {
      type: Object,
      required: true
    }
  },
  components: {
    RCSInput,
    RCSButton,
    RCSCheckbox
  },
  created() {
    if (this.structures && this.structures.elements.length > 0) {
      var countID = 0;
      this.structures.elements.forEach(element => {
        element._id = countID++;
        if (element.type == "checkbox") {
          element.options = [];
          var indexInc = 0;
          element.choices.forEach(choice => {
            element.options.push({
              ID: choice,
              label: element.tchoices[indexInc++],
              value: false
            });
          });
        }
      });
    }
  },
  methods: {
    buttonAction(action) {
      this.$emit(action, this.structures);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datafilter {
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
}
.title {
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
}
.lookuptable {
  width: 100%;
  background-color: white;
}
td {
  padding: 5px;
}
i {
  padding: 5px;
}
</style>
