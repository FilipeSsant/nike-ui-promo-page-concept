import styled from 'styled-components'

export const Hero = styled.main`
  margin: 0 2rem;
  height: calc(100% - 12rem - 16rem);

  @media screen and (max-width: 1200px) {
    height: 100%;
  }

  @media screen and (max-width: 720px) {
    height: 100%;
  }
`

export const Product = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

export const ProductInfoContainer = styled.div`
  /* border: 1px solid purple; */
  flex: 2;
`

export const ProductInfoImageContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  padding: 4.8rem 0;
`

export const ProductInfo = styled.div`
  color: var(--black-400);

  legend {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  h1 {
    font-size: 7.2rem;
    line-height: 8.6rem;
  }

  p {
    max-width: 400px;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 500;
    opacity: 0.5;
  }
`

// export const ProductInfoPlayVideo = styled.div`
//   display: flex;
//   align-items: center;

//   margin-top: 4rem;

//   button {
//     margin-right: 2.4rem;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 56px;
//     height: 56px;
//     border-radius: 50%;
//     background: rgba(19, 18, 18, 0.05);
//     border: none;
//   }

//   strong {
//     font-size: 2rem;
//     line-height: 2.4rem;
//     color: var(--black-400);
//   }
// `

export const ProductImageContainer = styled.div`
  position: relative;
  flex: 1;
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  z-index: -1;

  img {
    /* border: 1px solid green; */
    position: absolute;
    width: 800px;
    transform: translate(-55%, 0);
    @media screen and (max-width: 1200px) {
      transform: translate(-45%, 5%);
    }
    @media screen and (max-width: 720px) {
      transform: translate(-50%, 5%) rotate(-35deg);
      width: 600px;
    }
  }
`

export const ProductDetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.4rem 0;
  /* border: 1px solid blue; */
`

export const ProductDetailsItem = styled.div`
  & + div {
    margin-top: 4.8rem;
  }

  strong {
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`

export const ProductDetails = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));

  margin-top: 2.8rem;
`

export const ProductSize = styled.button`
  border: none;
  background: transparent;

  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(19, 18, 18, 0.05);
  box-sizing: border-box;

  font-size: 1.6rem;
  line-height: 2.4rem;
`

export const ProductColor = styled.button<{ color: string }>`
  width: 48px;
  height: 48px;

  background: ${({ color }) => color};
  border: none;
  border-radius: 50%;
`

export const SocialMediaContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 2.4rem;

  svg {
    display: block;
  }

  svg + svg {
    margin-top: 2.4rem;
  }
`
