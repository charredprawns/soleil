export default (stringData, numberOfChars) => {
  if (stringData.length > numberOfChars) {
    return `${stringData.slice(0, numberOfChars)}...`
  } else return stringData
}
