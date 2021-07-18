import { Variants } from 'framer-motion'
import { menuItems } from '..'
import { MenuItem } from './MenuItem'
import * as Styled from './styles'

const navigationVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export function MobileNavigation() {
  return (
    <Styled.Navigation variants={navigationVariants}>
      {menuItems.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
    </Styled.Navigation>
  )
}
