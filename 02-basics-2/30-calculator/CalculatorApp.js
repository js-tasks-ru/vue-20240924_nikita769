import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

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

    return {
      a,
      b,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
    <input type="number" v-model="a" aria-label="First operand" />

    <div class="calculator__operators">
      <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
      <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
      <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
      <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
    </div>

    <input type="number" v-model="b" aria-label="Second operand" />

    <div>=</div>

    <output>{{ result }}</output>
    </div>
  `,
})
