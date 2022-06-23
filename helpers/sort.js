export const sort = (sortBy, list) => {
  if (sortBy === null) {
    return
  }
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
