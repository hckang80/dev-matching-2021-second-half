import { request } from '../modules/api.js'

export default function ProductDetailPage ({ $target, id }) {
  const $page = document.createElement('div')
  $page.className = 'product-detail-page'
  $page.innerHTML = '<h1>상품 상세</h1>'

  this.state = {
    id,
    product: null
  }

  this.render = () => {
    $target.appendChild($page)
  }

  this.setState = (state) => {
    this.state = state
    console.log({ $target: $page, state: this.state })
  }

  const fetchProduct = async () => {
    const { id } = this.state
    const product = await request(`/products/${id}`)
    this.setState({
      ...this.state,
      product
    })
  }

  fetchProduct()
}
