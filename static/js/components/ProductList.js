export default function ProductList ({ $target, state }) {
  const $products = document.createElement('ul')
  $target.appendChild($products)

  this.state = state

  this.render = () => {
    if (!this.state) return
    $products.innerHTML = this.state.map(item => {
      return `<li class="product-item">
        <picture><img src="${item.image}" alt=""></picture>
        <div class="product-item__info">
          <div class="product-item__title">${item.title}</div>
          <div class="product-item__price">${item.price}</div>
        </div>
      </li>`
    }).join('')
  }

  this.render()
}
