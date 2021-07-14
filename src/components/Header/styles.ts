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

export const Menu = styled.nav`
  div {
    cursor: pointer;

    display: inline-block;
    font-weight: 500;
    font-size: 2rem;
    padding: 1.6rem 3.2rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`

export const Links = styled.div`
  svg {
    cursor: pointer;
  }

  svg + svg {
    margin-left: 3.2rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`
