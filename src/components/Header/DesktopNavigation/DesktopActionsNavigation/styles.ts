import { motion } from 'framer-motion'
import styled from 'styled-components'

export const DesktopActionsMenu = styled(motion.div)`
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
