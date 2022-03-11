import { routeChange } from '../modules/router.js'

export default function ProductList ({ $target, state }) {
  const $products = document.createElement('ul')
  $target.appendChild($products)

  this.state = state

  this.render = () => {
    if (!this.state) return 'Loading...'
    $products.innerHTML = this.state.map(item => {
      return `<li class="product-item" data-id="${item.id}">
        <picture><img src="${item.image}" alt="" title="${item.title}"></picture>
        <div class="product-item__info">
          <div class="product-item__title">${item.title}</div>
          <div class="product-item__price">${item.price}</div>
        </div>
      </li>`
    }).join('')
  }

  this.render()

  $products.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const { id } = $li.dataset
    id && routeChange(`products/${id}`)
  })
}
