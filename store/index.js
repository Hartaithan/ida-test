export const state = () => ({
  list: [],
  unsorted: [],
  alertIsOpen: false,
  sidebarIsOpen: false,
  sortBy: null
})

const sort = (sortBy, list) => {
  const items = [...list]
  switch (sortBy) {
    case 0:
      return items.sort((a, b) =>
        parseFloat(a.id) > parseFloat(b.id) ? 1 : -1
      )
    case 1:
      return items.sort((a, b) =>
        parseFloat(a.price.replace(' ', '')) >
        parseFloat(b.price.replace(' ', ''))
          ? 1
          : -1
      )
    case 2:
      return items.sort((a, b) =>
        parseFloat(b.price.replace(' ', '')) >
        parseFloat(a.price.replace(' ', ''))
          ? 1
          : -1
      )
    case 3:
      return items.sort((a, b) => (a.name > b.name ? 1 : -1))
    default:
      break
  }
}

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
    const items = [...state.list]
    switch (sortType) {
      case 0:
        state.list = sort(sortType, items)
        break
      case 1:
        state.list = sort(sortType, items)
        break
      case 2:
        state.list = sort(sortType, items)
        break
      case 3:
        state.list = sort(sortType, items)
        break
      default:
        break
    }
  },
  showAlert (state) {
    state.alertIsOpen = !state.alertIsOpen
  },
  showSidebar (state) {
    state.sidebarIsOpen = !state.sidebarIsOpen
  }
}
