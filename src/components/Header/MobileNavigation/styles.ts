import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileMenu = styled(motion.nav)`
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

export const Navigation = styled(motion.ul)`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 92;
`
