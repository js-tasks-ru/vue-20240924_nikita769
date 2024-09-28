import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstNumber = ref(0)
    const secondNumber = ref(0)
    const operationType = ref('sum')
    const result = ref(0)
    const setOperationType = (type) => {
      operationType.value = type
      calculate()
    }

    const calculate = () => {
      switch (operationType.value){
        case 'sum':
          result.value = firstNumber.value + secondNumber.value
          break
        case 'subtract':
          result.value = firstNumber.value - secondNumber.value
          break
        case 'multiply':
          result.value = firstNumber.value * secondNumber.value
          break
        case 'divide':
          result.value = firstNumber.value / secondNumber.value
          break
      }
    }

    return {
      firstNumber,
      secondNumber,
      result,
      setOperationType,
      calculate,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" v-model="firstNumber" @input="calculate" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" @click="setOperationType('sum')" name="operator" checked value="sum"/>➕</label>
        <label><input type="radio" @click="setOperationType('subtract')" name="operator" value="subtract"/>➖</label>
        <label><input type="radio" @click="setOperationType('multiply')" name="operator" value="multiply"/>✖</label>
        <label><input type="radio" @click="setOperationType('divide')" name="operator" value="divide"/>➗</label>
      </div>

      <input type="number" v-model="secondNumber" @input="calculate" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
