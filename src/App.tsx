import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { nikeAirEdge } from './services/product'

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
