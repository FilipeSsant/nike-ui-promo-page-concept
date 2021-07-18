import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MenuToggle = styled(motion.button)`
  z-index: 91;
  background: transparent;
  border: 0;

  position: fixed;
  left: 10px;
  top: 10px;

  height: 60px;
  width: 60px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .menuLine {
    height: 2.5px;
    border-radius: 6px;
    width: 40%;
    background: var(--black-400);
    transform-origin: 1.5px;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`
