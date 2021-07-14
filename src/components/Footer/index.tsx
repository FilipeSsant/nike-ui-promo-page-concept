import * as Styles from './styles'

export function Footer() {
  return (
    <Styles.Footer>
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
        <button>ADD TO CART</button>
        <div className="divider" />
        <span>$95.60</span>
      </Styles.PriceContainer>
    </Styles.Footer>
  )
}
