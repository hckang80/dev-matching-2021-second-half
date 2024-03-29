import { request } from '../modules/api.js'
import ProductList from '../components/ProductList.js'

export default function ProductListPage ({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'product-list-page'
  $page.innerHTML = '<h1>상품 목록</h1>'

  this.render = () => {
    $target.appendChild($page)
  }

  this.setState = (state) => {
    this.state = state
    new ProductList({ $target: $page, state: this.state })
  }

  const fetchProducts = async () => {
    const products = await request('/products?sort=desc')
    this.setState(products)
  }

  fetchProducts()
}
