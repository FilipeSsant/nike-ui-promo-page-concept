import { Variants } from 'framer-motion'
import { ReactNode } from 'react'
import * as Styled from './styles'

interface DesktopMenuItemProps {
  children: ReactNode
}

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200
    }
  }
}

export function DesktopMenuItem({ children }: DesktopMenuItemProps) {
  return (
    <Styled.MenuItem variants={menuItemVariants}>{children}</Styled.MenuItem>
  )
}
