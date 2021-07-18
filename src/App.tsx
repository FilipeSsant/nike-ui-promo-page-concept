import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { nikeAirEdge } from './mocks/product'

function App() {
  return (
    <>
      <Header />
      <Product product={nikeAirEdge} />
      <Footer />
    </>
  )
}

export default App
