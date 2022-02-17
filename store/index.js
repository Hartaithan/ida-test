export const state = () => ({
  list: []
})

export const mutations = {
  addItem (state, form) {
    const length = state.length + 1
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
  }
}
