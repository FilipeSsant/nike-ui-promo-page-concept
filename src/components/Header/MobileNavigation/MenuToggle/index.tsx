import { motion } from 'framer-motion'
import * as Styles from './styles'

interface MenuToggleProps {
  toggle: () => void
}

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <Styles.MenuToggle onClick={toggle}>
      <motion.div
        className="menuLine"
        variants={{
          closed: { rotate: 0 },
          open: { rotate: 45 }
        }}
      />
      <motion.div
        className="menuLine"
        variants={{
          closed: { opacity: 1, scale: 1 },
          open: { opacity: 0, scale: 0 }
        }}
      />
      <motion.div
        className="menuLine"
        variants={{
          closed: { rotate: 0 },
          open: { rotate: -45 }
        }}
      />
    </Styles.MenuToggle>
  )
}
