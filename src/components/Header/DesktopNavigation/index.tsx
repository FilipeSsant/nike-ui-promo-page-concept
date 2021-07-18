import { Variants } from 'framer-motion'
import { menuItems } from '..'
import { DesktopActionsNavigation } from './DesktopActionsNavigation'
import { DesktopMenuItem } from './DesktopMenuItem'
import * as Styled from './styles'

const menuVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}

export function DesktopNavigation() {
  return (
    <>
      <Styled.DesktopMenu
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <DesktopMenuItem key={item}>{item}</DesktopMenuItem>
        ))}
      </Styled.DesktopMenu>
      <DesktopActionsNavigation />
    </>
  )
}
