import { Pinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

export default function ({ $pinia }: { $pinia: Pinia }) {
  if (process.client) $pinia.use(createPersistedStatePlugin({}))
}
