export const state = () => ({
  list: [],
  unsorted: [],
  alertIsOpen: false
})

export const mutations = {
  addItem (state, form) {
    const length = state.list.length + 1
    state.list = [
      ...state.list,
      {
        id: length,
        name: form.name,
        description: form.description,
        link: form.link,
        price: form.price
      }
    ]
    localStorage.setItem('list', JSON.stringify(state.list))
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
    if (state.unsorted.length === 0) {
      state.unsorted = [...state.list]
    }
    const items = [...state.list]
    switch (sortType) {
      case 0:
        state.list = [...state.unsorted]
        break
      case 1:
        items.sort((a, b) =>
          parseFloat(a.price.replace(' ', '')) >
          parseFloat(b.price.replace(' ', ''))
            ? 1
            : -1
        )
        state.list = items
        break
      case 2:
        items.sort((a, b) =>
          parseFloat(b.price.replace(' ', '')) >
          parseFloat(a.price.replace(' ', ''))
            ? 1
            : -1
        )
        state.list = items
        break
      case 3:
        items.sort((a, b) => (a.name > b.name ? 1 : -1))
        state.list = items
        break
      default:
        break
    }
  },
  showAlert (state) {
    state.alertIsOpen = !state.alertIsOpen
  }
}
