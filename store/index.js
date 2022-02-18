export const state = () => ({
  list: [],
  unsorted: [],
  alertIsOpen: false,
  sidebarIsOpen: true
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
    state.list = [
      {
        id: 1,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 2,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 3,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 4,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 5,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 6,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 7,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      },
      {
        id: 8,
        name: '123123',
        description: '123123',
        link: 'https://html5css.ru/css/img_mountains.jpg',
        price: '123123'
      }
    ]
    // state.list = list
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
  },
  showSidebar (state) {
    state.sidebarIsOpen = !state.sidebarIsOpen
  }
}
