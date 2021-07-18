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
      img: 'nike-air-edge-270-brown.png',
      color: '#B6A179'
    },
    {
      img: 'nike-air-edge-270-black.png',
      color: '#272425'
    },
    {
      img: 'nike-air-edge-270-blue.png',
      color: '#6389CB'
    },
    {
      img: 'nike-air-edge-270-yellow.png',
      color: '#F2C758'
    },
    {
      img: 'nike-air-edge-270-white.png',
      color: '#FFFFFF'
    }
  ]
}
