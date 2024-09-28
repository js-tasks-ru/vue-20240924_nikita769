import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    const increase = () => {
      counter.value++
    }

    const reduce = () => {
      counter.value--
    }

    return {
      increase,
      reduce,
      counter,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter === 0"
        @click="reduce"
      >➖</button>

      <span class="count" data-testid="count">
        {{ counter }}
      </span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter === 5"
        @click="increase"
      >➕</button>
    </div>
  `,
})
