import { request } from '../api.js'

export default function ProductListPage ({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'product-list-page'
  $page.innerHTML = '<h1>상품 목록</h1>'

  this.render = () => {
    $target.appendChild($page)
  }

  const fetchProducts = async () => {
    const products = await request('/products?sort=desc')
    console.log({ products })
  }

  fetchProducts()
}
