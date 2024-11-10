import { defineComponent } from 'vue'
import '../WeatherApp.css'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    sender_name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },

  template: `
    <div class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">
            {{ sender_name + ':' + description }}
        </span>
    </div>
  `,
})
