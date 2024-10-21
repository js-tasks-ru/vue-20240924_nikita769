import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

<<<<<<< HEAD
  setup () {
    const a = ref(0)
    const b = ref(0)
    const operator = ref('sum')

    const result = computed(() => {
      if (operator.value === 'sum') {
        return a.value + b.value
      }
      if (operator.value === 'subtract') {
        return a.value - b.value
      }
      if (operator.value === 'multiply') {
        return a.value * b.value
      }
      if (operator.value === 'divide') {
        return a.value / b.value
      }
      return undefined
    })
=======
  setup() {
    const a = ref(0)
    const b = ref(0)
    const operator = ref('sum')
    const operations = [
      {
        operator: 'sum',
        label: '➕',
      },
      {
        operator: 'subtract',
        label: '➖',
      },
      {
        operator: 'multiply',
        label: '✖',
      },
      {
        operator: 'divide',
        label: '➗',
      },
    ]

    const calculations = {
      sum: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    }

    const result = computed(() => calculations[operator.value]?.(a.value, b.value))
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf

    return {
      a,
      b,
      operator,
      result,
<<<<<<< HEAD
=======
      operations,
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf
    }
  },

  template: `
    <div class="calculator">
<<<<<<< HEAD
    <input type="number" v-model="a" aria-label="First operand" />

    <div class="calculator__operators">
      <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
      <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
      <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
      <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
    </div>

    <input type="number" v-model="b" aria-label="Second operand" />
=======
      <input type="number" v-model="a" aria-label="First operand" />

      <div class="calculator__operators">
        <label v-for="operation in operations">
          <input v-model="operator" type="radio" name="operator" :value="operation.operator"/>
          {{ operation.label }}
        </label>
      </div>

      <input type="number" v-model="b" aria-label="Second operand" />
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf

    <div>=</div>

<<<<<<< HEAD
    <output>{{ result }}</output>
=======
      <output>{{ result }}</output>
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf
    </div>
  `,
})
