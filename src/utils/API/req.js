// import { generateError } from 'utils'
const { REACT_APP_BACKEND } = process.env

export default async (
  HTTPMethod = 'GET',
  endpoint = '/v1/category/endpoint',
  params = {},
  useCaching = false,
  mediaRequest = false
) => {
  try {
    // build the request
    let requestURL = `${REACT_APP_BACKEND}/api${endpoint}`
    if (HTTPMethod === 'GET') {
      const esc = encodeURIComponent
      requestURL +=
        '?' +
        Object.keys(params)
          .map(k => `${esc(k)}=${esc(params[k])}`)
          .join('&')
    }

    let response

    // send the request
    response = await window.fetch(requestURL)

    // parse the response
    response = await response.json()
    return response

    // return any errors
  } catch (e) {
    return console.log(e)
    // generateError(
    //   'Server Error',
    //   "We weren't able to properly communicate with the Servers! " +
    //     'Please try again later.'
    // )
  }
}
