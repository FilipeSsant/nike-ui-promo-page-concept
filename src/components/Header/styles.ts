import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled.header`
  height: 12rem;
  margin: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  @media screen and (max-width: 840px) {
    justify-content: center;
  }
`

export const Menu = styled.nav`
  text-transform: uppercase;

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const MenuItem = styled(motion.div)`
  cursor: pointer;
  position: relative;

  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background: var(--black-400);
    transition: width 0.4s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

export const Links = styled.div`
  display: flex;

  svg {
    cursor: pointer;
  }

  div + div {
    margin-left: 3.2rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const MobileMenuToggle = styled(motion.nav)`
  display: none;

  .background {
    z-index: 80;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    background: var(--black-400);
  }

  @media screen and (max-width: 840px) {
    display: block;
  }
`
