import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
<<<<<<< HEAD
=======
    const MIN_ID = 1
    const MAX_ID = 5
    const ids = Array.from({ length: MAX_ID }, (_, i) => i + MIN_ID)
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf
    const meetupId = ref(1)
    const meetup = ref(null)

    watch(
      meetupId,
      async () => {
        meetup.value = await getMeetup(meetupId.value)
      },
      { immediate: true },
    )

    return {
<<<<<<< HEAD
=======
      ids,
      MIN_ID,
      MAX_ID,
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf
      meetupId,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
<<<<<<< HEAD
    <div class="meetup-selector__control">
      <button class="button button--secondary" type="button" :disabled="meetupId <= 1" @click="meetupId -= 1">Предыдущий</button>

      <div class="radio-group" role="radiogroup">
        <div v-for="i in 5" class="radio-group__button">
          <input
            :id="\`meetup-id-\${i}\`"
            class="radio-group__input"
            type="radio"
            name="meetupId"
            :value="i"
            v-model="meetupId"
          />
          <label :for="\`meetup-id-\${i}\`" class="radio-group__label">
            {{ i }}
          </label>
        </div>
      </div>

      <button class="button button--secondary" type="button" :disabled="meetupId >= 5" @click="meetupId += 1">Следующий</button>
    </div>

    <div v-if="meetup" class="meetup-selector__cover">
      <div class="meetup-cover">
        <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
=======
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" :disabled="meetupId <= MIN_ID" @click="meetupId -= 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="i in ids" class="radio-group__button">
            <input
              :id="\`meetup-id-\${i}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="i"
              v-model="meetupId"
            />
            <label :for="\`meetup-id-\${i}\`" class="radio-group__label">
              {{ i }}
            </label>
          </div>
        </div>

        <button class="button button--secondary" type="button" :disabled="meetupId >= MAX_ID" @click="meetupId += 1">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div v-if="meetup" class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
>>>>>>> 30ff7da4a1f7717c7600c562525272d98f219edf
      </div>
    </div>

    </div>
  `,
})
