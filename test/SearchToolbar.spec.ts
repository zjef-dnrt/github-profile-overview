import { mount, createLocalVue } from '@vue/test-utils'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
// @ts-ignore
import SearchToolbar from '~/components/SearchToolbar'
// @ts-ignore
import LoadingButton from "~/components/LoadingButton"
import { useReposStore } from '~/store/repositoriesStore'

const localVue = createLocalVue()
localVue.use(PiniaVuePlugin)

const wrapper = mount(SearchToolbar, {
  data: () => ({
    profileName: "Tjeef"
  }),
  attachTo: document.body,
  localVue,
  pinia: createTestingPinia({ stubActions: false })
})

const repositoriesStore = useReposStore()

describe('SearchToolbar', () => {
  test('Profile name input focus on mount', () => {
    const profileNameInput = wrapper.find("input").element
    expect(profileNameInput).toBe(document.activeElement)
  })

  test('Loading button calls fetchRepos action', async () => {
    // @ts-ignore
    // const fetchReposSpy = jest.spyOn(wrapper.vm, 'fetchRepos')
    const loadingButton = wrapper.findComponent(LoadingButton)

    await loadingButton.trigger('click')
    expect(repositoriesStore.fetchRepos).toHaveBeenCalledWith('Tjeef')

    await loadingButton.trigger('keyup.enter')
    expect(repositoriesStore.fetchRepos).toHaveBeenCalledWith('Tjeef')
  })
})
