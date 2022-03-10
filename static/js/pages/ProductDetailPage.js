import { request } from '../api.js'

export default function ProductDetailPage ({ $target, id }) {
  const $page = document.createElement('div')
  $page.className = 'product-detail-page'
  $page.innerHTML = '<h1>상품 상세</h1>'

  this.state = {
    id
  }

  this.render = () => {
    $target.appendChild($page)
  }

  const fetchProduct = async () => {
    const { id } = this.state
    const product = await request(`/products/${id}`)
    console.log(product)
  }

  fetchProduct()
}
