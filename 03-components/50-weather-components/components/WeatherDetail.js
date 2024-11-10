import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'WeatherDetail',

  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },

  template: `
    <div class="weather-details__item">
      <div class="weather-details__item-label">{{ label }}</div>
      <div class="weather-details__item-value">{{ value }}</div>
    </div>
  `,
})
