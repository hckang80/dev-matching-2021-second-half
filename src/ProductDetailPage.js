export default function ProductDetailPage ({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'product-detail-page'
  $page.innerHTML = '<h1>상품 상세</h1>'

  this.render = () => {
    $target.appendChild($page)
  }
}
