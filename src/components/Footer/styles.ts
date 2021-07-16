import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Footer = styled(motion.footer)`
  margin: 0 2rem;
  height: 16rem;
  padding: 2rem 8rem;
  background: var(--white-500);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span,
  button {
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--black-400);
  }

  button {
    background: transparent;
    border: none;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 3rem 2rem;
  } ;
`

export const NavigationContainer = styled.nav`
  display: flex;

  button {
    text-align: center;
    & + button {
      margin-left: 5.8rem;
    }
    span {
      display: block;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  .divider {
    height: 0.15rem;
    width: 3rem;
    background: var(--black-400);
    margin: 0 0.5rem;
  }
`
