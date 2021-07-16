import { motion, Variants } from 'framer-motion'
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import * as Styled from './styles'

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      delay: idx * 0.4
    }
  }),
  hover: {
    scale: 1
  }
}

const menuOtherItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 180,
      duration: 0.5
    }
  }
}

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

export function Header() {
  const menuItems = ['New Releases', 'Men', 'Women', 'Customize']

  return (
    <Styled.Header>
      <motion.svg
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        width="101"
        height="36"
        viewBox="0 0 101 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9836 35.2955C9.03445 35.1795 6.62156 34.3805 4.73488 32.8965C4.37482 32.613 3.51682 31.763 3.22897 31.4045C2.46389 30.452 1.94375 29.525 1.59681 28.4965C0.529241 25.3305 1.07868 21.176 3.16837 16.6165C4.95759 12.713 7.71842 8.84151 12.5351 3.47951C13.2446 2.69051 15.3576 0.382996 15.3712 0.382996C15.3762 0.382996 15.2611 0.580499 15.1162 0.820999C13.8638 2.898 12.7922 5.34449 12.2084 7.46249C11.2706 10.861 11.3837 13.7775 12.5397 16.039C13.337 17.597 14.7041 18.9465 16.2413 19.6925C18.9324 20.998 22.8725 21.106 27.6841 20.0085C28.0154 19.9325 44.4309 15.618 64.1633 10.4205C83.8956 5.2225 100.043 0.973001 100.046 0.976501C100.051 0.981001 54.2017 20.406 30.4005 30.4835C26.6312 32.079 25.6232 32.482 23.8511 33.098C19.3213 34.673 15.2636 35.4245 11.9836 35.2955Z"
          fill="#131212"
        />
      </motion.svg>

      <Styled.Menu>
        {menuItems.map((item, idx) => (
          <Styled.MenuItem
            custom={idx}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            key={item}
          >
            {item}
          </Styled.MenuItem>
        ))}
      </Styled.Menu>
      <Styled.Links>
        <motion.div
          variants={menuOtherItemsVariants}
          initial="hidden"
          animate="visible"
        >
          <AiOutlineUser size="3.6rem" />
        </motion.div>
        <motion.div
          variants={menuOtherItemsVariants}
          initial="hidden"
          animate="visible"
        >
          <AiOutlineShopping size="3.6rem" />
        </motion.div>
      </Styled.Links>
    </Styled.Header>
  )
}
