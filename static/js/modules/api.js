const BASE_URI = 'https://fakestoreapi.com'

export const request = async (url, options = {}) => {
  try {
    const fullUrl = `${BASE_URI}${url}`
    const response = await fetch(fullUrl, options)

    if (response.ok) return await response.json()
    throw new Error('HTTP REQUEST FAILED')
  } catch (error) {
    console.error(error)
  }
}
