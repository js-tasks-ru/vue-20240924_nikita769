import { defineComponent } from 'vue'
import '../WeatherApp.css'
import WeatherAlert from "./WeatherAlert.js";
import WeatherConditions from "./WeatherConditions.js";
import WeatherDetails from "./WeatherDetails.js";
import { WeatherConditionIcons } from '../weather.service.ts'

export default defineComponent({
  name: 'WeatherCard',
  components: {WeatherDetails, WeatherConditions, WeatherAlert},

  setup() {
    return {
      WeatherConditionIcons,
    }
  },

  props: {
    cardData: {
      alert: {
        sender_name: {
          type: String,
          default: '',
        },
        description: {
          type: String,
          default: '',
        },
        default: null,
      },
      geographic_name: {
        type: String,
        default: '',
      },
      current: {
        clouds: {
          type: Number,
          default: null,
        },
        dt: {
          type: String,
          default: '',
        },
        humidity: {
          type: Number,
          default: null,
        },
        pressure: {
          type: Number,
          default: null,
        },
        sunrise: {
          type: String,
          default: '',
        },
        sunset: {
          type: String,
          default: '',
        },
        visibility: {
          type: Number,
          default: null,
        },
        temp: {
          type: Number,
          default: null,
        },
        wind_speed: {
          type: Number,
          default: null,
        },
        weather: {
          description: {
            type: String,
            default: '',
          },
          id: {
            type: Number,
            default: null,
          },
          main: {
            type: String,
            default: '',
          },
        },
        default: null,
      },
    },
  },

  template: `
    <div>
    <ul class="weather-list unstyled-list">
      <li
        class="weather-card"
        :class="{'weather-card--night':
              cardData.current.dt < cardData.current.sunrise || cardData.current.dt > cardData.current.sunset
            }"
      >
        <WeatherAlert v-if="cardData.alert" :sender_name="cardData.alert.sender_name" :description="cardData.alert.description" />
        <div>
          <h2 class="weather-card__name">
            {{ cardData.geographic_name }}
          </h2>
          <div class="weather-card__time">
            {{ cardData.current.dt }}
          </div>
        </div>
        <WeatherConditions
          :description="cardData.current.weather.description"
          :id="WeatherConditionIcons[cardData.current.weather.id]"
          :temp="(cardData.current.temp - 273.15).toFixed(1)"
        />
        <WeatherDetails
          :clouds="cardData.current.clouds"
          :humidity="cardData.current.humidity"
          :pressure="Math.round(cardData.current.pressure * 0.75)"
          :wind_speed="cardData.current.wind_speed"
        />
      </li>
    </ul>
    </div>
  `,
})
