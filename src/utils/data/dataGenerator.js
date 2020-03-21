export default (type, size, random = true, data) => {
  switch (type) {
    case 'int':
      const data = Array.from({ length: size }, () =>
        Math.floor(Math.random() * size)
      )
      return data
    case 'double':
      break

    default:
      break
  }
}
