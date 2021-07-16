import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Hero = styled(motion.main)`
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

export const ProductInfoContainer = styled(motion.div)`
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

export const ProductDetailsItem = styled(motion.div)`
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

export const ProductSize = styled(motion.button)<{ isSelected: boolean }>`
  position: relative;
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

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 1px solid transparent;
    width: 0;
    height: 0;
    z-index: -1;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: -2px;
    right: -2px;
  }

  transition: background-color 0.2s;

  ${({ isSelected }) =>
    isSelected
      ? css`
          border: 1px solid var(--black-400);
          background-color: rgba(0, 0, 0, 0.02);
        `
      : css`
          &:hover {
            &::before,
            &::after {
              width: 100%;
              height: 100%;
            }

            &::before {
              border-top-color: var(--black-400);
              border-right-color: var(--black-400);
              transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
            }

            &::after {
              border-bottom-color: var(--black-400);
              border-left-color: var(--black-400);
              transition: border-color 0s ease-out 0.2s,
                width 0.1s ease-out 0.2s, height 0.2s ease-out 0.33s;
            }
          }
        `}
`

export const ProductColorBox = styled(motion.div)`
  width: 48px;
  height: 48px;

  position: relative;
`

export const ProductColor = styled.button<{ color: string }>`
  width: 48px;
  height: 48px;

  background: ${({ color }) => color};
  border: none;
  border-radius: 50%;
`

export const ProductColorOutline = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 6px solid white;
  border-radius: 50%;
`
