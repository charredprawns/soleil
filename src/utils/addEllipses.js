export default (stringData, numberOfChars) => {
  if (stringData.length > 25) {
    return `${stringData.slice(0, numberOfChars)}...`
  } else return stringData
}
