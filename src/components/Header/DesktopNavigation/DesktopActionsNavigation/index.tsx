import { motion, Variants } from 'framer-motion'
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import * as Styled from './styles'

const actionMenuVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  }
}

const actionItemsVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  },
  hidden: {
    opacity: 0,
    scale: 0
  }
}

export function DesktopActionsNavigation() {
  return (
    <Styled.DesktopActionsMenu
      variants={actionMenuVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={actionItemsVariants}>
        <AiOutlineUser size="3.6rem" />
      </motion.div>
      <motion.div variants={actionItemsVariants}>
        <AiOutlineShopping size="3.6rem" />
      </motion.div>
    </Styled.DesktopActionsMenu>
  )
}
