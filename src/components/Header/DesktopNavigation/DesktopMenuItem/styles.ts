import { motion } from 'framer-motion'
import styled from 'styled-components'

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
