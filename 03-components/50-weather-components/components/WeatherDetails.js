import { defineComponent } from 'vue'
import '../WeatherApp.css'
import WeatherDetail from "./WeatherDetail.js";

export default defineComponent({
  name: 'WeatherDetails',
  components: {WeatherDetail},

  props: {
    clouds: {
      type: Number,
      default: null,
    },
    humidity: {
      type: Number,
      default: null,
    },
    pressure: {
      type: Number,
      default: null,
    },
    wind_speed: {
      type: Number,
      default: null,
    },
  },

  setup(props) {

    const details = {
      1: {
        label: 'Давление, мм рт. ст.',
        value: props.pressure,
      },
      2: {
        label: 'Влажность, %',
        value: props.humidity,
      },
      3: {
        label: 'Облачность, %',
        value: props.clouds,
      },
      4: {
        label: 'Ветер, м/с',
        value: props.wind_speed,
      },
    }

    return {
      details,
    }
  },

  template: `
    <div class="weather-details">
        <div v-for="(detail, key) in details" :key="key">
            <WeatherDetail :label="detail.label" :value="detail.value" />
        </div>
    </div>
  `,
})
