<template>
  <div class="auto-complete">
    <label>{{ label }}:&nbsp;</label>
    <input
      class="form-control"
      :class="{ 'has-error': hasError}"
      type="text"
      v-model="input"
      @keydown.tab.prevent="complete()"
      @focus="focus(true)"
      @blur="focus(false)"
    />
    <table v-if="focused">
      <tbody>
        <tr v-for="(person, i) in data" v-bind:key="i" @mousedown="complete(i)">
          <td>{{ person[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "rcs_autocomplete",
  props: {
    label: {
      type: String,
      required: true
    },
    sources: {
      type: String
    },
    value: { type: String, required: false },
    data: { type: Array, required: true },
    field: { type: String, required: true }
  },
  data() {
    return {
      inputData: "",
      input: "",
      focused: false,
      inputSources: [],
      hasError: false
    };
  },
  watch: {
    input() {
      this.$emit("input", this.input);
    }
  },
  methods: {
    complete(i) {
      if (i == undefined) {
        for (let row of this.data) {
          if (this.filter(row)) {
            this.select(row);
            return;
          }
        }
      }

      this.select(this.data[i]);
    },

    select(row) {
      this.input = row[this.field];
      this.selected = true;
    },

    filter(row) {
      return (
        row[this.field].toLowerCase().indexOf(this.input.toLowerCase()) != -1
      );
    },

    focus(f) {
      this.focused = f;
    }
  },
  beforeMount() {
    if (this.sources) {
      var increaseNumber = 1;
      var arrayData = this.sources.split(";");
      arrayData.forEach(element => {
        this.inputSources.push({
          id: increaseNumber++,
          name: element
        });
      });
    }
  },
  created() {
    this.input = this.value || "";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 10px;
}

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

.form-control:focus {
  outline: none;
  border-color: #2196f3;
  border-radius: 0px;
}

.auto-complete input.has-error {
  border-color: #f44336;
}

.auto-complete table {
  position: absolute;
  width: 300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border: 2px solid #888;
  border-top: 0px;
  cursor: pointer;
}

.auto-complete table tr {
  background: white;
}

.auto-complete table tr td {
  padding: 10px;
}

.auto-complete table tr:nth-child(even) {
  background: #eee;
}

.auto-complete table tr:hover {
  background: #2196f3;
  color: white;
}
</style>