import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import productImg from '../../img/nike-air-edge-270.png'
import * as Styles from './styles'

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5]
const colors = ['#B6A179', '#272425', '#6389CB', '#F2C758', '#FFFFFF']

export function Product() {
  return (
    <Styles.Hero>
      <Styles.Product>
        <Styles.ProductInfoImageContainer>
          <Styles.ProductInfoContainer>
            <Styles.ProductInfo>
              <legend>MEN`S SHOE</legend>
              <h1>NIKE AIR EDGE 270</h1>
              <p>
                The Nike Air Edge 270 takes the look of retro basketball and
                puts it through a modern lens.
              </p>
            </Styles.ProductInfo>
          </Styles.ProductInfoContainer>
          <Styles.ProductImageContainer>
            <img src={productImg} alt="Nike Air Edge 270" />
          </Styles.ProductImageContainer>
        </Styles.ProductInfoImageContainer>

        <Styles.ProductDetailsContainer>
          <Styles.ProductDetailsItem>
            <strong>Select Size (US)</strong>
            <Styles.ProductDetails>
              {sizes.map((size) => (
                <Styles.ProductSize
                  type="button"
                  key={size}
                  className="sizeBox"
                >
                  {size}
                </Styles.ProductSize>
              ))}
            </Styles.ProductDetails>
          </Styles.ProductDetailsItem>
          <Styles.ProductDetailsItem>
            <strong>Select Color</strong>
            <Styles.ProductDetails>
              {colors.map((color) => (
                <Styles.ProductColor
                  color={color}
                  type="button"
                  key={color}
                  className="colorBox"
                />
              ))}
            </Styles.ProductDetails>
          </Styles.ProductDetailsItem>
          <Styles.SocialMediaContainer>
            <RiInstagramFill cursor="pointer" size="2.4rem" />
            <RiTwitterFill cursor="pointer" size="2.4rem" />
            <RiFacebookFill cursor="pointer" size="2.4rem" />
          </Styles.SocialMediaContainer>
        </Styles.ProductDetailsContainer>
      </Styles.Product>
    </Styles.Hero>
  )
}
