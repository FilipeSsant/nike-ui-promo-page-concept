import { NikeLogo } from '../Logos'
import * as Styled from './styles'

export function Loading() {
  return (
    <Styled.LoadingContainer>
      <NikeLogo
        animate={{ scale: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </Styled.LoadingContainer>
  )
}
