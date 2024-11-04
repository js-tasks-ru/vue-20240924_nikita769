import {defineComponent} from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['removeEmailByIndex'],

  setup(props, ctx) {

    function selectedEmail(index) {
      ctx.emit('removeEmailByIndex', index)
    }

    return {
      selectedEmail,
    }
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        @selected-email-to-remove="selectedEmail(index)"
      />
    </ul>
  `,
})
