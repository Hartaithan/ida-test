import { sort } from '~/helpers/sort'

export const state = () => ({
  list: [],
  unsorted: [],
  alertIsOpen: false,
  sidebarIsOpen: false,
  sortBy: null
})

export const mutations = {
  addItem (state, form) {
    const id =
      state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : 1
    const newList = [
      ...state.list,
      {
        id,
        name: form.name,
        description: form.description,
        link: form.link,
        price: form.price
      }
    ]
    if (state.sortBy) {
      state.list = sort(state.sortBy, newList)
    } else {
      state.list = newList
    }
    localStorage.setItem('list', JSON.stringify(newList))
  },
  deleteItem (state, id) {
    const items = [...state.list].filter(item => item.id !== id)
    state.list = items
    localStorage.setItem('list', JSON.stringify(state.list))
  },
  loadFromLocalStorage (state, list) {
    state.list = list
  },
  sortBy (state, sortType) {
    state.sortBy = sortType
    if (state.unsorted.length === 0) {
      state.unsorted = [...state.list]
    }
    sort(state.sortBy, [...state.list])
  },
  showAlert (state) {
    state.alertIsOpen = !state.alertIsOpen
  },
  showSidebar (state) {
    state.sidebarIsOpen = !state.sidebarIsOpen
  }
}
