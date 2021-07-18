import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loading } from './components/Loading'
import { Product } from './components/Product'
import { nikeAirEdge } from './mocks/product'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  async function cacheImages(srcArray: string[]) {
    const promises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()

        img.src = src
        img.onload = () => resolve(true)
        img.onerror = () => reject()
      })
    })

    await Promise.all(promises)

    setIsLoading(false)
  }

  useEffect(() => {
    const imgs = [
      '/img/nike-air-edge-270-black.png',
      '/img/nike-air-edge-270-blue.png',
      '/img/nike-air-edge-270-brown.png',
      '/img/nike-air-edge-270-white.png',
      '/img/nike-air-edge-270-yellow.png'
    ]

    cacheImages(imgs)
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <Header />
      <Product product={nikeAirEdge} />
      <Footer />
    </>
  )
}

export default App
