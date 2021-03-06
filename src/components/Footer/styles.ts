import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Footer = styled(motion.footer)`
  margin: 0 2rem;
  height: 16rem;
  padding: 2rem 2rem;
  background: var(--white-500);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  @media screen and (max-width: 840px) {
    height: auto;
  }
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

export const SocialMediaContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    margin-left: 0.5rem;
    color: var(--black-400);
  }
`

export const StudyApplicationLabel = styled.strong`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1rem;
`
