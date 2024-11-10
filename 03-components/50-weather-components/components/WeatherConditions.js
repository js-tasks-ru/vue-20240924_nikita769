import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    id: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    temp: {
      type: String,
      default: '',
    },
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="description">
        {{ id }}
      </div>
      <div class="weather-conditions__temp">
        {{ temp + ' °C' }}
      </div>
    </div>
  `,
})
