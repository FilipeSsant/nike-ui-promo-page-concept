import { Variants } from 'framer-motion'
import { ReactNode } from 'react'
import * as Styled from './styles'

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    cursor: 'pointer',
    transition: {
      stiffness: 1000,
      velocity: -100
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    cursor: 'unset',
    transition: {
      stiffness: 1000
    }
  }
}

interface MenuItemProps {
  children: ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  return (
    <Styled.MenuItem variants={variants} whileTap={{ scale: 0.9 }}>
      {children}
    </Styled.MenuItem>
  )
}
