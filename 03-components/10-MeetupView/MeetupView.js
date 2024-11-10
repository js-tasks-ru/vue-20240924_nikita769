import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupInfo,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: {
      title: String,
      image: String,
      description: String,
      agenda: [],
      organizer: String,
      place: String,
      date: String,
    }
  },

  template: `
    <div>

      <MeetupCover :title="meetup.title" :image="meetup.image" />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <MeetupDescription :description="meetup.description" />

            <h2>Программа</h2>

            <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <MeetupInfo
              :date="meetup.date"
              :organizer="meetup.organizer"
              :place="meetup.place"
            />

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
