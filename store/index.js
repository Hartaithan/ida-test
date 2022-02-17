export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Наименование товара 1',
      description:
        '1) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '10 000'
    },
    {
      id: 2,
      name: 'Наименование товара 2',
      description:
        '2) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '20 000'
    },
    {
      id: 3,
      name: 'Наименование товара 3',
      description:
        '3) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '30 000'
    },
    {
      id: 4,
      name: 'Наименование товара 4',
      description:
        '4) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '40 000'
    },
    {
      id: 5,
      name: 'Наименование товара 5',
      description:
        '5) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '50 000'
    },
    {
      id: 6,
      name: 'Наименование товара 6',
      description:
        '6) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '60 000'
    },
    {
      id: 7,
      name: 'Наименование товара 7',
      description:
        '7) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '70 000'
    },
    {
      id: 8,
      name: 'Наименование товара 8',
      description:
        '8) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '80 000'
    },
    {
      id: 9,
      name: 'Наименование товара 9',
      description:
        '9) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '90 000'
    },
    {
      id: 10,
      name: 'Наименование товара 10',
      description:
        '10) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      img: 'item_pic',
      price: '100 000'
    }
  ]
})

export const mutations = {
  addItem (state) {
    const length = state.length + 1
    state.list = [
      ...state.list,
      {
        id: length,
        name: `Наименование товара ${length}`,
        description: `${length}) Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,
        img: 'item_pic',
        price: 10000 * length
      }
    ]
  }
}
