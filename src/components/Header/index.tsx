import { Variants } from 'framer-motion'
import { NikeLogo } from '../Logos'
import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
import * as Styled from './styles'

const logoVariants: Variants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  }
}

export const menuItems = ['New Releases', 'Men', 'Women', 'Customize']

export function Header() {
  return (
    <Styled.Header>
      <NikeLogo variants={logoVariants} />

      <DesktopNavigation />

      <MobileNavigation />
    </Styled.Header>
  )
}
