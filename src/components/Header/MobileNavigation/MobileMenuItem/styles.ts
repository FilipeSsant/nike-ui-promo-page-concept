import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MenuItem = styled(motion.li)`
  width: 100%;
  position: relative;

  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;

  color: var(--black-400);
  text-transform: uppercase;
`
