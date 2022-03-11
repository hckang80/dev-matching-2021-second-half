const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE'

export const init = (callback) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, callback)
}

export const routeChange = (url, params) => {
  history.pushState(null, null, url)
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params))
}