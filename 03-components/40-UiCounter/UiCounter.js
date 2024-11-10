import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    count: {
      type: Number,
      default: null,
    },
  },

  emits: ['update:count'],

  setup(props, ctx) {
    const increment = () => {
      ctx.emit('update:count', props.count + 1)
    }

    const decrement = () => {
      ctx.emit('update:count', props.count - 1)
    }

    return {
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count === min || count === 0" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count === max" @click="increment">➕</UiButton>
    </div>
  `,
})
