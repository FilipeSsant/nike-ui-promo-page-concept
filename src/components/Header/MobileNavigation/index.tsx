import { motion, useCycle, Variants } from 'framer-motion'
import { menuItems } from '..'
import { MenuToggle } from './MenuToggle'
import { MobileMenuItem } from './MobileMenuItem'
import * as Styled from './styles'

const sidebarVariants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const navigationVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export function MobileNavigation() {
  const [isMenuOpen, toggleMenuOpen] = useCycle(false, true)

  return (
    <Styled.MobileMenu initial={false} animate={isMenuOpen ? 'open' : 'closed'}>
      <motion.div className="background" variants={sidebarVariants}>
        <Styled.Navigation variants={navigationVariants}>
          {menuItems.map((item) => (
            <MobileMenuItem key={item}>{item}</MobileMenuItem>
          ))}
        </Styled.Navigation>
      </motion.div>

      <MenuToggle toggle={() => toggleMenuOpen()} />
    </Styled.MobileMenu>
  )
}
