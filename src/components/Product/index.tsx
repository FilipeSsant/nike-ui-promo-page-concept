import { AnimateSharedLayout, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import productImg from '../../img/nike-air-edge-270.png'
import * as Styles from './styles'

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5]
const colors = ['#B6A179', '#272425', '#6389CB', '#F2C758', '#FFFFFF']

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      mass: 0.8,
      when: 'beforeChildren'
    }
  }
}

const productInfoContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}

const productInfoVariants: Variants = {
  hidden: {
    opacity: 0,
    x: '-20vw'
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const productDetailsContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}

const productDetailsVariants: Variants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180
    }
  }
}

export function Product() {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState<number>()

  return (
    <Styles.Hero variants={heroVariants} initial="hidden" animate="visible">
      <Styles.Product>
        <Styles.ProductInfoImageContainer>
          <Styles.ProductInfoContainer variants={productInfoContainerVariants}>
            <Styles.ProductInfo>
              <motion.legend variants={productInfoVariants}>
                MEN`S SHOE
              </motion.legend>
              <motion.h1 variants={productInfoVariants}>
                NIKE AIR EDGE 270
              </motion.h1>
              <motion.p variants={productInfoVariants}>
                The Nike Air Edge 270 takes the look of retro basketball and
                puts it through a modern lens.
              </motion.p>
            </Styles.ProductInfo>
          </Styles.ProductInfoContainer>
          <Styles.ProductImageContainer>
            <img src={productImg} alt="Nike Air Edge 270" />
          </Styles.ProductImageContainer>
        </Styles.ProductInfoImageContainer>

        <Styles.ProductDetailsContainer>
          <Styles.ProductDetailsItem variants={productDetailsContainerVariants}>
            <strong>Select Size (US)</strong>
            <Styles.ProductDetails>
              {sizes.map((size) => (
                <Styles.ProductSize
                  initial={{ scale: 0 }}
                  animate={{
                    scale: selectedSize === size ? 1.3 : 1,
                    transition: {
                      type: 'spring',
                      stiffness: 600
                    }
                  }}
                  type="button"
                  key={size}
                  onClick={() => selectedSize !== size && setSelectedSize(size)}
                  isSelected={selectedSize === size}
                >
                  {size}
                </Styles.ProductSize>
              ))}
            </Styles.ProductDetails>
          </Styles.ProductDetailsItem>
          <Styles.ProductDetailsItem variants={productDetailsContainerVariants}>
            <strong>Select Color</strong>
            <Styles.ProductDetails>
              <AnimateSharedLayout>
                {colors.map((color) => (
                  <Styles.ProductColorBox
                    variants={productDetailsVariants}
                    key={color}
                  >
                    <Styles.ProductColor
                      onClick={() => setSelectedColor(color)}
                      color={color}
                      type="button"
                    />
                    {color === selectedColor && (
                      <Styles.ProductColorOutline
                        layoutId="outline"
                        initial={false}
                        animate={{ borderColor: selectedColor }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </Styles.ProductColorBox>
                ))}
              </AnimateSharedLayout>
            </Styles.ProductDetails>
          </Styles.ProductDetailsItem>
        </Styles.ProductDetailsContainer>
      </Styles.Product>
    </Styles.Hero>
  )
}
