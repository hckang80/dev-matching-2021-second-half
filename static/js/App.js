import ProductListPage from './pages/ProductListPage.js'
import ProductDetailPage from './pages/ProductDetailPage.js'
import CartPage from './pages/CartPage.js'

export default function App ({ $target }) {
  this.route = () => {
    const { pathname } = location
    $target.innerHTML = ''

    const router = {
      '/products' () {
        new ProductDetailPage({ $target }).render()
      },
      '/cart' () {
        new CartPage({ $target }).render()
      },
    }

    if (pathname === '/') return new ProductListPage({ $target }).render()

    const [, path] = pathname.split('/')

    router[`/${path}`] && router[`/${path}`]()
  }

  this.route()
}
