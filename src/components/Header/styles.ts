import styled from 'styled-components'

export const Header = styled.header`
  height: 12rem;
  margin: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  @media screen and (max-width: 840px) {
    justify-content: center;
  }
`
