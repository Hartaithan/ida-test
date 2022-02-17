export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Наименование товара 1',
      description:
        '1) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://html5css.ru/css/img_fjords.jpg',
      price: '10 000'
    },
    {
      id: 2,
      name: 'Наименование товара 2',
      description:
        '2) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://html5css.ru/css/img_forest.jpg',
      price: '20 000'
    },
    {
      id: 3,
      name: 'Наименование товара 3',
      description:
        '3) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://html5css.ru/css/img_lights.jpg',
      price: '30 000'
    }
  ]
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
  },
  deleteItem (state, id) {
    const items = [...state.list].filter(item => item.id !== id)
    state.list = items
  }
}
