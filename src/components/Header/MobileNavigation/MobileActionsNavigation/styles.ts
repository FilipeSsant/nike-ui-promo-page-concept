import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileActionsMenu = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;

  svg {
    cursor: pointer;
  }

  div + div {
    margin-left: 3.2rem;
  }
`
