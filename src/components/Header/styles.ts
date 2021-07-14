import styled from 'styled-components'

export const Header = styled.header`
  max-width: 1680px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  @media screen and (max-width: 720px) {
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

  @media screen and (max-width: 720px) {
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

  @media screen and (max-width: 720px) {
    display: none;
  }
`
