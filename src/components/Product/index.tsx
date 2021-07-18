import { AnimateSharedLayout, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { ProductProps, VariantProps } from '../../mocks/product'
import * as Styles from './styles'

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

interface ProductPageProps {
  product: ProductProps
}

export function Product({ product }: ProductPageProps) {
  const [actualVariant, setActualVariant] = useState<VariantProps>(
    product.variants[0]
  )

  const [selectedColor, setSelectedColor] = useState(actualVariant.color)
  const [selectedSize, setSelectedSize] = useState<number>()

  const changeProductVariant = (color: string) => {
    setActualVariant(
      product.variants.find((item) => {
        if (item.color === color) return item
      }) || product.variants[0]
    )
    setSelectedColor(color)
  }

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
                {product.title}
              </motion.h1>
              <motion.p variants={productInfoVariants}>
                {product.description}
              </motion.p>
            </Styles.ProductInfo>
          </Styles.ProductInfoContainer>
          <Styles.ProductImageContainer>
            <motion.div
              key={actualVariant.img}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.45
                }
              }}
            >
              <img src={`/img/${actualVariant.img}`} alt={product.title} />
            </motion.div>
          </Styles.ProductImageContainer>
        </Styles.ProductInfoImageContainer>

        <Styles.ProductDetailsContainer>
          <Styles.ProductDetailsItem variants={productDetailsContainerVariants}>
            <strong>Select Size (US)</strong>
            <Styles.ProductDetails>
              {product.sizes.map((size) => (
                <motion.div variants={productDetailsVariants} key={size}>
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
                    onClick={() =>
                      selectedSize !== size && setSelectedSize(size)
                    }
                    isSelected={selectedSize === size}
                  >
                    {size}
                  </Styles.ProductSize>
                </motion.div>
              ))}
            </Styles.ProductDetails>
          </Styles.ProductDetailsItem>
          <Styles.ProductDetailsItem variants={productDetailsContainerVariants}>
            <strong>Select Color</strong>
            <Styles.ProductDetails>
              <AnimateSharedLayout>
                {product.colors.map((color) => (
                  <Styles.ProductColorBox
                    variants={productDetailsVariants}
                    key={color}
                  >
                    <Styles.ProductColor
                      onClick={() => changeProductVariant(color)}
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
