import { Variants } from 'framer-motion'
import { FaFigma, FaGithub, FaLinkedin } from 'react-icons/fa'
import * as Styles from './styles'

const footerVariants: Variants = {
  hidden: {
    y: '100vh'
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 1
    }
  }
}

export function Footer() {
  return (
    <Styles.Footer variants={footerVariants} initial="hidden" animate="visible">
      <Styles.PriceContainer>
        <button>ADD TO CART</button>
        <div className="divider" />
        <span>$95.60</span>
      </Styles.PriceContainer>
      <Styles.SocialMediaContainer>
        <Styles.SocialMedia>
          <FaFigma size="2rem" />
          <a
            href="https://www.figma.com/community/file/904707398442738360/Nike-Promo-Page-Design-Concept"
            target="_blank"
            rel="noreferrer"
          >
            Ilia Utkin | Nike Promo Page Design Concept
          </a>
        </Styles.SocialMedia>
        <Styles.SocialMedia>
          <FaLinkedin size="2rem" />
          <a
            href="https://www.linkedin.com/in/filipe-da-silva-santos/"
            target="_blank"
            rel="noreferrer"
          >
            Filipe Santos | Front End Developer
          </a>
        </Styles.SocialMedia>
        <Styles.SocialMedia>
          <FaGithub size="2rem" />
          <a
            href="https://github.com/FilipeSsant/nike-ui-promo-page-concept"
            target="_blank"
            rel="noreferrer"
          >
            Project Repository
          </a>
        </Styles.SocialMedia>
      </Styles.SocialMediaContainer>
      <Styles.StudyApplicationLabel>
        *This is a study application
      </Styles.StudyApplicationLabel>
    </Styles.Footer>
  )
}
