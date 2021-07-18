import { Variants } from 'framer-motion'
import { ReactNode } from 'react'
import * as Styled from './styles'

interface DesktopMenuItemProps {
  children: ReactNode
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180
    }
  }
}

export function DesktopMenuItem({ children }: DesktopMenuItemProps) {
  return <Styled.MenuItem variants={variants}>{children}</Styled.MenuItem>
}
