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
      <Styles.NavigationContainer>
        <button>
          PREV
          <span>&#10229;</span>
        </button>
        <button>
          NEXT
          <span>&#10230;</span>
        </button>
      </Styles.NavigationContainer>
      <Styles.PriceContainer>
        <button>PRODUCT VALUE</button>
        <div className="divider" />
        <span>$95.60</span>
      </Styles.PriceContainer>
    </Styles.Footer>
  )
}
