import {defineComponent, onUnmounted, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const formattedTime = ref('')

    onMounted(() => {
      clockStart()
    })

    onUnmounted(() => {
      clockStop()
    })

    const update = () => {
      const date = new Date()
      formattedTime.value = date.toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    let timerId;

    function clockStart() {
      timerId = setInterval(update, 1000);
      update();
    }

    function clockStop() {
      clearInterval(timerId);
      timerId = null;
    }

    return {
      formattedTime
    }
  },

  template: `<div class="clock">{{formattedTime}}</div>`,
})
