import Vue from 'vue'
import { DateTime } from 'luxon'

Vue.filter('formatDate', (value: string) => {
  const dateObject = DateTime.fromISO(value).setLocale('en-GB')
  const dateFormat = 'ff'

  return dateObject.toFormat(dateFormat)
})
