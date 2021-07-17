import nikeAirEdgeBlack from '../img/nike-air-edge-270-black.png'
import nikeAirEdgeBlue from '../img/nike-air-edge-270-blue.png'
import nikeAirEdgeWhite from '../img/nike-air-edge-270-white.png'
import nikeAirEdgeYellow from '../img/nike-air-edge-270-yellow.png'
import nikeAirEdgeBrown from '../img/nike-air-edge-270.png'

export interface VariantProps {
  img: string
  color: string
}

export interface ProductProps {
  title: string
  description: string
  genre: string
  colors: string[]
  sizes: number[]
  variants: VariantProps[]
}

export const nikeAirEdge: ProductProps = {
  title: 'NIKE AIR EDGE 270',
  description:
    'The Nike Air Edge 270 takes the look of retro basketball and puts it through a modern lens.',
  genre: 'MEN',
  colors: ['#B6A179', '#272425', '#6389CB', '#F2C758', '#FFFFFF'],
  sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5],
  variants: [
    {
      img: nikeAirEdgeBrown,
      color: '#B6A179'
    },
    {
      img: nikeAirEdgeBlack,
      color: '#272425'
    },
    {
      img: nikeAirEdgeBlue,
      color: '#6389CB'
    },
    {
      img: nikeAirEdgeYellow,
      color: '#F2C758'
    },
    {
      img: nikeAirEdgeWhite,
      color: '#FFFFFF'
    }
  ]
}
