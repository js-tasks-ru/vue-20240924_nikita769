import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from "./components/WeatherCard.js";

export default defineComponent({
  name: 'WeatherApp',
  components: {WeatherCard},

  setup() {
    return {
      getWeatherData,
      WeatherConditionIcons,
    }
  },

  template: `
    <h1 class="title">Погода в Средиземье</h1>
    <div v-for="(card, index) in getWeatherData()" :key="index">
      <WeatherCard :card-data="card" />
    </div>
  `,
})
