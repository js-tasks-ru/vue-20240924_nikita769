import { defineComponent, ref, onBeforeMount } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetupId = ref(1)
    const meetupTitle = ref('')

    onBeforeMount(async () => {
      meetupTitle.value = await getMeetup(meetupId.value).then((meetup) => {
        return meetup.title
      })
    })

    const getMeetupHandler = async (meetupIdProp) => {
      meetupId.value = meetupIdProp
      meetupTitle.value = await getMeetup(meetupId.value).then((meetup) => {
        return meetup.title
      })
    }

    const increaseButton = async () => {
      await getMeetupHandler(meetupId.value + 1)
    }

    const decreaseButton = async () => {
      await getMeetupHandler(meetupId.value - 1)
    }

    return {
      getMeetupHandler,
      increaseButton,
      decreaseButton,
      meetupId,
      meetupTitle,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          :disabled="meetupId === 1"
          @click="decreaseButton"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div v-for="buttonId in 5" :key="buttonId" class="radio-group__button">
            <input
              :id="'meetup-id-' + buttonId"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="buttonId"
              :checked="buttonId === meetupId"
              @click="getMeetupHandler(buttonId)"
            />
            <label for="meetup-id-1" class="radio-group__label">
              {{ buttonId }}
            </label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="meetupId === 5"
          @click="increaseButton"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>
    </div>
  `,
})
