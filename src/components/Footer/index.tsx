import { Variants } from 'framer-motion'
import * as Styles from './styles'

const footerVariants: Variants = {
  hidden: {
    y: '100vh'
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1
    }
  }
}

export function Footer() {
  return (
    <Styles.Footer variants={footerVariants} initial="hidden" animate="visible">
      <Styles.PriceContainer>
        <button>ADD TO CART</button>
        <div className="divider" />
        <span>$95.60</span>
      </Styles.PriceContainer>
    </Styles.Footer>
  )
}
