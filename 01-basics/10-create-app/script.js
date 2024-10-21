import {createApp} from 'vue'

const app = createApp({
  setup () {
    function formatAsLocalDate(date) {
      return new Date(date).toLocaleDateString(undefined,  { dateStyle: 'long' })
    }

    return {
      formatAsLocalDate,
    }
  },
  template: '<div>Сегодня {{formatAsLocalDate(new Date())}}</div>',
  name: 'app'
})

app.mount('#app')
